/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHOW_RATINGS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
