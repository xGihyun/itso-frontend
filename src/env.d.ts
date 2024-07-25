/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DB_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
