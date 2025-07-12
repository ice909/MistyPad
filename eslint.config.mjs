import tseslint from "@electron-toolkit/eslint-config-ts"
import eslintConfigPrettier from "@electron-toolkit/eslint-config-prettier"
import eslintPluginVue from "eslint-plugin-vue"

export default tseslint.config(
  { ignores: ["**/node_modules", "**/dist", "**/out"] },
  tseslint.configs.recommended,
  eslintPluginVue.configs["flat/recommended"],
  {
    files: ["**/*.{ts,mts,tsx,vue}"],
    rules: {
      "vue/require-default-prop": "off",
      "vue/multi-word-component-names": "off",
      "vue/block-lang": [
        "error",
        {
          script: {
            lang: "ts"
          }
        }
      ]
    }
  },
  eslintConfigPrettier
)
