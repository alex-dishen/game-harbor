/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAWG_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
