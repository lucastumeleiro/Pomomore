import { useTheme } from 'contexts/ThemeContext'

import { Github } from '@styled-icons/bootstrap/Github'
import * as S from './styles'
import Tooltip from 'components/Tooltip'
import Logo from 'components/Logo'
import SEO from 'components/SEO'
import { useAuth } from 'contexts/AuthContext'

const HomeTemplate = () => {
  const { ToggleTheme } = useTheme()

  const { loginWithGitHub } = useAuth()

  return (
    <S.Wrapper>
      <SEO
        title="Home"
        image="logo-full.svg"
        description="A app to make you move."
        shouldIndexPage
      />
      <section>
        <S.LeftSide>
          <img src="/img/logo-full.svg" alt="Logo Pomomore" />
          <strong>PomoMore</strong>
        </S.LeftSide>
        <S.RightSide>
          <div>
            <strong>Bem-vindo</strong>
            <p>Este é o webapp PomoMore, com ele você pode controlar seu tempo de maneira mais eficaz através da técnica Pomodoro, faça seu cadastro e começe agora mesmo. :)</p>

            <S.TitleContainer>
              <button type="button" onClick={ToggleTheme}>
                <Tooltip text="Clique aqui para mudar o tema">
                  <Github size={55} />
                </Tooltip>
              </button>

              <span>Faça login com o Github para começar</span>
            </S.TitleContainer>

            <S.LoginContainer>
              <S.ButtonLogin type="button" onClick={loginWithGitHub}>
                <Github color="#FFF" size={32} /> Sign in with Github
              </S.ButtonLogin>
            </S.LoginContainer>
          </div>
        </S.RightSide>
      </section>
    </S.Wrapper>
  )
}

export default HomeTemplate
