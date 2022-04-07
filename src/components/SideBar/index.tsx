import Link from 'next/link'
import Switch from 'react-switch'
import { useTheme } from 'contexts/ThemeContext'
import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt'

import { Award } from '@styled-icons/boxicons-regular/Award'
import { useRouter } from 'next/router'

import * as S from './styles'

const SideBar = () => {
  const { ToggleTheme, theme } = useTheme()

  const router = useRouter()

  return (
    <S.Wrapper>
      <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.3426 17.8241C42.6525 13.5931 36.2715 11.6936 30.9497 13.6532C29.8217 14.0683 25.1752 14.0683 24.0477 13.6532C18.727 11.6946 12.346 13.5942 8.65741 17.8241C4.27778 22.8489 2.90991 29.5686 3.84644 35.9028C5.03759 43.9557 9.53334 49.473 17.8628 51.9515C22.5133 53.3352 24.3044 52.5927 27.5015 52.5927C30.6987 52.5927 32.4923 53.3352 37.1403 51.9515C45.4697 49.473 49.9655 43.9562 51.1566 35.9028C52.0916 29.5696 50.7263 22.8499 46.3426 17.8241Z" fill="#FF6363" />
        <path d="M46.3426 17.8241C42.6525 13.5931 36.2715 11.6936 30.9498 13.6532C29.8217 14.0683 25.1753 14.0683 24.0478 13.6532C22.2959 13.008 20.432 12.7875 18.5829 12.9255C21.6196 13.5875 21.725 17.4324 31.2446 16.7266C40.091 16.0707 46.6242 29.2035 41.5892 40.0176C38.4644 46.7357 27.7944 51.2824 13.7877 50.3418C15.0944 51.0003 16.458 51.5395 17.8618 51.9526C22.5123 53.3362 24.3034 52.5937 27.5005 52.5937C30.6977 52.5937 32.4913 53.3362 37.1398 51.9526C45.4687 49.474 49.9645 43.9572 51.1556 35.9038C52.0917 29.5696 50.7263 22.8494 46.3426 17.8241Z" fill="#F25757" />
        <path d="M26.7489 12.8603C25.8256 10.12 23.2737 8.3605 20.4157 7.9205C21.7281 9.32555 22.6768 10.5137 23.0196 12.8603C21.557 11.934 17.5196 11.1059 15.1999 12.5818C18.1536 13.0717 19.7695 13.8233 21.394 15.9047C21.394 15.9047 20.1244 16.9619 19.8092 18.1851C19.5846 19.0575 19.7471 21.0925 19.7471 21.0925C21.7194 18.5854 26.0323 20.1437 26.3751 17.4319C26.3751 17.4319 30.8454 18.5324 32.4078 21.7443C32.9562 17.6448 31.0027 16.8091 31.0027 16.8091C32.9781 15.536 36.491 16.6986 38.4888 17.436C37.2666 15.4097 34.4463 13.5926 31.7722 13.8111C32.9435 11.9309 34.8945 10.944 37.1062 10.8436C33.8398 9.52467 29.1108 9.32555 26.7473 12.8568L26.7489 12.8603Z" fill="#56A875" />
        <path d="M28.5985 2.21018C24.9537 5.088 25.3489 12.0852 25.7792 15.4305C26.042 15.5614 26.3679 15.5915 26.7315 15.3587C26.7432 13.3314 26.8955 10.1745 27.6482 8.06004C28.7329 5.01467 30.4435 4.09647 30.4435 4.09647C30.444 2.05332 28.5985 2.21018 28.5985 2.21018Z" fill="#428F60" />
        <path d="M15.0618 17.7681C11.691 18.9394 5.37521 22.5368 7.27628 32.7454C7.35674 33.1783 7.98008 33.1732 8.05341 32.7393C8.62785 29.3476 10.3624 22.7476 15.4468 18.4408C15.7799 18.1587 15.4743 17.6244 15.0618 17.7681Z" fill="#FF8585" />
      </svg>

      <S.WrapperNavigation>
        <Link href="/dashboard">
          <S.LinkMenu active={router.pathname === '/dashboard'}>
            <HomeAlt />
          </S.LinkMenu>
        </Link>

        <Link href="/dashboard/leaderboard">
          <S.LinkMenu active={router.pathname === '/dashboard/leaderboard'}>
            <Award />
          </S.LinkMenu>
        </Link>
      </S.WrapperNavigation>

      <Switch
        checked={theme.title === 'dark'}
        onChange={ToggleTheme}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={15}
        onHandleColor={theme.colors.grayLine}
        offHandleColor={theme.colors.grayLine}
        offColor={theme.colors.background}
        onColor={theme.colors.background}
      />
    </S.Wrapper>
  )
}

export default SideBar
