import 'styled-components'
import { BreakPoints, Colors, FontSizes } from 'theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof BreakPoints
    fontSizes: typeof FontSizes
    colors: typeof Colors
  }
}
