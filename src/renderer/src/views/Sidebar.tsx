import { defineComponent } from "vue"
import SidebarActions from "@renderer/components/SidebarActions"

export default defineComponent({
  name: "Sidebar",
  setup() {
    return () => (
      <div>
        <SidebarActions />
        <div class="border-t border-base-200"></div>
      </div>
    )
  }
})
