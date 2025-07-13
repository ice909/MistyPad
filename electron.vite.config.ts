import { resolve } from "path"
import { defineConfig, externalizeDepsPlugin } from "electron-vite"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"
import vueJsx from "@vitejs/plugin-vue-jsx"

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        "@type": resolve("src/type"),
        "@utils": resolve("src/utils")
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@type": resolve("src/type"),
        "@renderer": resolve("src/renderer/src"),
        "@layouts": resolve("src/renderer/src/layouts"),
        "@views": resolve("src/renderer/src/views"),
        "@utils": resolve("src/utils")
      }
    },
    plugins: [vue(), tailwindcss(), vueJsx()]
  }
})
