import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "School Links",
  description: "A page to store my presentations",
  lang: "en-US",

  head: [
    ["link", { rel: "icon", href: "icon.svg" }],
    ["meta", { name: "author", content: "Gabriel Cozma" }],
    ["link", { rel: "preconnect", href: "https://rsms.me/" }],
    ["link", { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" }],
  ],

  themeConfig: {
    author: {
      name: "Gabriel Cozma",
      link: "https://www.gxbs.me/",
    },
  },
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
