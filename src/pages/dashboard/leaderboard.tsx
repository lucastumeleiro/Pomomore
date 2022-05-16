import React from 'react'
import { useAuth } from 'contexts/AuthContext'
import api from 'services/api'
import HomeTemplate from 'templates/Home'

import LeaderboardTemplate, {
  LeaderboardTemplateProps
} from 'templates/Leaderboard'

export default function Leaderboard(props: LeaderboardTemplateProps) {
  const { isLogged, userData } = useAuth()

  return (
    <>
      {userData === null && <HomeTemplate />}
      {isLogged && <LeaderboardTemplate {...props} />}
    </>
  )
}

export async function getServerSideProps () {
  const { data } = await api.get('/api/user')

  return {
    revalidate: 60,

    props: {
      users: data.users
    }
  }
}
