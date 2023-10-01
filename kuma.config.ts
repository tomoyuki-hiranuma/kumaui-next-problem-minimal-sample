import { createTheme } from '@kuma-ui/core'

const theme = createTheme({
  breakpoints: {
    sm: '56rem', //=896px //NOTE: SPとPCの境目。
    md: '62rem', //=992px //NOTE: PCの広域・狭域の境目。PCで２カラムを並べる最小幅。
    lg: '80rem', //=1280px
    xl: '80rem', //=1280px
    '2xl': '80rem', //=1280px
  },
  fonts: {
    heading: `'Noto Sans JP', sans-serif`,
    body: `'Noto Sans JP', sans-serif`,
  },
  colors: {
    gray: {
      200: "#edf2f7",
    },
    red: {
      200: "#fed7d7",
    }
  },
})

type UserTheme = typeof theme

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme
