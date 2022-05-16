import { DefaultTheme, CustomTheme } from 'styled-components'
import dark from './dark'
import light from './light'

const defaultTheme = {
  title: 'dark',
  colors: {
    background: '#121214',
    backgroundOverlay: 'rgba(13, 12, 10, 0.9)',
    backgroundBox: '#202024',
    backgroundIndex: '#121214',
    inputBackground: 'rgba( 255, 255, 255, 0.45)',
    backgroundLogo: '#FFFFFF',

    grayLine: '#DCDDE0',
    text: '#EEEEEE',
    textHighlight: '#5690FF',
    title: '#FFFFFF',
    red: '#E83F5B',
    green: '#04d361',

  },
  boxShadow: '0 0 4px rgba(0, 0, 0, 1)',
  font: {
    family: {
      inter: '"Inter", sans-serif',
      rajdhani: '"Rajdhani", sans-serif'
    },
    light: 400,
    normal: 500,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  }
}

function combineTheme(theme: CustomTheme): DefaultTheme {
  return { ...defaultTheme, ...theme }
}

export { combineTheme, dark, light }
