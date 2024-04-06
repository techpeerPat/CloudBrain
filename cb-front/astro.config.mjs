import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
    sanity({
      projectId: "q6z6xftu",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
    react(),
  ],
});
