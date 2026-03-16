/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORTFOLIO_CONTENT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}