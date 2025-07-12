import { resolve } from "path"
import { defineConfig, externalizeDepsPlugin } from "electron-vite"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"
import vueJsx from "@vitejs/plugin-vue-jsx"

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
        "@layouts": resolve("src/renderer/src/layouts"),
        "@views": resolve("src/renderer/src/views")
      }
    },
    plugins: [vue(), tailwindcss(), vueJsx()]
  }
})
