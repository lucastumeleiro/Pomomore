import { useAuth } from 'contexts/AuthContext'
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
