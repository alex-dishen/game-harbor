import { DefaultTheme } from 'styled-components';

export enum BreakPoints {
  sm = '35em', // 560px
  md = '46em', // 736px
  lg = '55em', // 880px
}

export enum FontSizes {
  xs = '1.125rem', // 18px
  sm = '1.375rem', // 22px
  md = '1.5rem', // 24px
  lg = '1.625rem', // 26px
  xl = '2.875rem', // 46px
  '2xl' = '3.125rem', // 50px
  '3xl' = '3.75rem', // 60px
}

const theme: DefaultTheme = {
  breakpoints: BreakPoints,
  fontSizes: FontSizes,
};

export default theme;
