import "./assets/base.css"

import { createApp } from "vue"
import App from "./App"
import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import "@milkdown/crepe/theme/common/style.css"
import "@milkdown/crepe/theme/frame.css"

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.mount("#app")
