declare module '*.mp4' {
  const src: string
  export default src
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
