import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
  experimental: {
    env: {
      schema: {
        DB_URL: envField.string({ context: "server", access: "secret" }),
      },
    },
  },
});
