import { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import challenges from 'data/challenges.json'
import axios from 'axios'
import { useAuth } from './AuthContext'

import Modal from 'components/Modal'

type ChallengesProviderProps = {
  children: ReactNode
}

type ChallengeProps = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

type ChallengesContextData = {
  level: number
  currentExperience: number
  totalExperience: number
  challengesCompleted: number
  activeChallenge: ChallengeProps
  experienceToNextLevel: number
  isLevelModalOpen: boolean
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
  closeLevelUpModal: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const { userData } = useAuth()

  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [totalExperience, setTotalExperience] = useState(0)

  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if (loading) {
      axios
        .get(`/api/user/${userData.email}`)
        .then((response) => {
          setChallengesCompleted(response.data.user.challengesCompleted || 0)
          setCurrentExperience(response.data.user.currentExp || 0)
          setTotalExperience(response.data.user.totalExp || 0)
          setLevel(response.data.user.level || 1)
        })
        .catch((e) => {
          console.log('Erro ao buscar dados do user', e)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      axios.post(`/api/user`, {
        level: level || 1,
        currentExp: currentExperience,
        totalExp: totalExperience,
        email: userData?.email,
        challengesCompleted,
        photo: userData?.photo,
        name: userData?.name
      })
    }
  }, [level, currentExperience, challengesCompleted, loading, totalExperience])

  function levelUp() {
    setLevel(level + 1)
    setIsLevelModalOpen(true)
  }

  function closeLevelUpModal() {
    setIsLevelModalOpen(false)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    toast.info('Você tem um novo desafio', {
      position: 'top-right',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
  }

  function resetChallenge() {
    setActiveChallenge(null)
    toast.warning('Você quase conseguiu, na próxima vai! :)', {
      position: 'top-right',
      autoClose: 4000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      toast.success('Incrível você subiu de level!', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
      levelUp()
    } else {
      toast.success('Mandou bem!', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
    }

    setCurrentExperience(finalExperience)
    setTotalExperience(totalExperience + amount)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }
  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        totalExperience,
        isLevelModalOpen,
        startNewChallenge,
        levelUp,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal
      }}
    >
      {!loading && children}
      {isLevelModalOpen && <Modal />}
    </ChallengesContext.Provider>
  )
}
