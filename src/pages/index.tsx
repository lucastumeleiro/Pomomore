import { useAuth } from 'contexts/AuthContext'
import { useRouter } from 'next/router'
import HomeTemplate from 'templates/Home'

export default function Home() {
  const { isLogged } = useAuth()
  const router = useRouter()

  return (
    <>
      {isLogged ? router.push('/dashboard') : <HomeTemplate />}
    </>
  )
}
