import { useTheme } from 'contexts/ThemeContext'


import { Google } from 'styled-icons/bootstrap'
import * as S from './styles'
import Tooltip from 'components/Tooltip'
import SEO from 'components/SEO'
import { useAuth } from 'contexts/AuthContext'

const HomeTemplate = () => {
  const { ToggleTheme } = useTheme()

  const { loginWithGoogle } = useAuth()

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
                </Tooltip>
              </button>

            </S.TitleContainer>

            <S.LoginContainer>
              <S.ButtonLogin type="button" onClick={loginWithGoogle}>
                <Google color="#FFF" size={32} /> Entre com o Google
              </S.ButtonLogin>
            </S.LoginContainer>
          </div>
        </S.RightSide>
      </section>
    </S.Wrapper>
  )
}

export default HomeTemplate
