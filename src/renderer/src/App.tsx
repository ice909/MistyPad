import { defineComponent } from "vue"
import MainLayout from "@layouts/MainLayout"
import Sidebar from "@views/Sidebar"
import Editor from "@views/Editor"
import { MilkdownProvider } from "@milkdown/vue"

export default defineComponent({
  name: "App",

  setup() {
    return () => (
      <MainLayout>
        {{
          sidebar: () => <Sidebar />,
          main: () => (
            <MilkdownProvider>
              <Editor />
            </MilkdownProvider>
          )
        }}
      </MainLayout>
    )
  }
})
