import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react'

interface AuthProviderProps {
  children: ReactNode
}
interface AuthContextProps {
  isLogged: boolean
  userData: {
    name: string
    photo: string
    email: string
  }
  loginWithGoogle: () => void
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextProps)

export const useAuth = () => useContext(AuthContext)

import firebase from '../services/firebase'

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogged, setIsLogged] = useState(false)
  const [userData, setUserData] = useState(undefined)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserData({
          name: user.displayName || 'Sem Nome informado.',
          photo: user.photoURL,
          email: user.email
        })

        setIsLogged(true)
      } else {
        setUserData(null)
        setIsLogged(false)
      }
    })
  }, [])

  const loginWithGoogle = useCallback(async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    return await firebase
      .auth()
      .signInWithRedirect(provider)
      .then(() => {
        window.location.href = '/dashboard'
      })
  }, [])

  const logout = useCallback(async () => {
    return await firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.href = '/dashboard'
      })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        userData,
        loginWithGoogle,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
