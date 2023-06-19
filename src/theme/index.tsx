import { DefaultTheme } from 'styled-components';

export const BreakPoints = {
  sm: '35em', // 560px
  md: '46em', // 736px
  lg: '55em', // 880px
};

export const FontSizes = {
  xs: '1.125rem', // 18px
  sm: '1.375rem', // 22px
  md: '1.5rem', // 24px
  lg: '1.625rem', // 26px
  xl: '2.875rem', // 46px
  '2xl': '3.125rem', // 50px
  '3xl': '3.75rem', // 60px
};

export const Colors = {
  teal: {
    teal50: '#6abebb',
    teal100: '#18b0ab',
  },
};

// #61bdff
// #1E80C7
// #0790F3

// rgb(15, 16, 17)
// rgb(26, 26, 26)
// rgb(32, 32, 32)
// rgb(38, 38, 38)
// rgb(45, 45, 45)
// rgb(46, 46, 46)
// rgb(153, 153, 153)
// rgb(64, 64, 64)
// rgb(218, 218, 218)
// #4F4F4F
// #bcbcbc
// rgba(255, 255, 255, 0.2)
// rgba(255, 255, 255, 0.8)
// rgb(140, 140, 140)
// rgb(204, 204, 204)
// rgb(229, 229, 229)

const theme: DefaultTheme = {
  breakpoints: BreakPoints,
  fontSizes: FontSizes,
  colors: Colors,
};

export default theme;
