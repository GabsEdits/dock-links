import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dock Links",
  lang: "en-US",

  head: [
    ["link", { rel: "icon", href: "icon.svg" }],
    ["link", { rel: "preconnect", href: "https://rsms.me/" }],
    ["link", { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" }],
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
        }
      }
    }
  }
});
