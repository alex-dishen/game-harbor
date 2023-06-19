import 'styled-components';
import { BreakPoints, FontSizes } from 'theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof BreakPoints;
    fontSizes: typeof FontSizes;
  }
}
