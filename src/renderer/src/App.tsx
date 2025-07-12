import { defineComponent } from "vue"
import MainLayout from "@layouts/MainLayout"
import Sidebar from "@views/Sidebar"
import Editor from "@views/Editor"

export default defineComponent({
  name: "App",

  setup() {
    return () => (
      <div id="app">
        <MainLayout>
          {{
            sidebar: () => <Sidebar />,
            main: () => <Editor />
          }}
        </MainLayout>
      </div>
    )
  }
})
