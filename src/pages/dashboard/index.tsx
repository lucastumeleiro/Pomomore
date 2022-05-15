import { useAuth } from 'contexts/AuthContext'
// import { GetServerSideProps } from 'next'
import React from 'react'
import DashboardTemplate from 'templates/Dashboard'
import HomeTemplate from 'templates/Home'

export default function Dashboard() {
  const { isLogged, userData } = useAuth()

  return (
    <>
      {userData === null && <HomeTemplate />}
      {isLogged && <DashboardTemplate />}
    </>
  )
}
