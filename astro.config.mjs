import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  output: "hybrid",
  adapter: vercel(),
  experimental: {
    env: {
      schema: {
        DB_URL: envField.string({ context: "server", access: "secret" }),
        GOOGLE_PRIVATE_KEY: envField.string({
          context: "server",
          access: "secret",
        }),
        GOOGLE_SERVICE_ACCOUNT_EMAIL: envField.string({
          context: "server",
          access: "secret",
        }),
        GOOGLE_SPREADSHEET_ID: envField.string({
          context: "server",
          access: "secret",
        }),
        REGISTRATION_LINK: envField.string({
          context: "client",
          access: "public",
        }),
      },
    },
  },
});

