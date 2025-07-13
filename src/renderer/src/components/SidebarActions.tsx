import { defineComponent } from "vue"
import ToolButton from "@renderer/components/Button"
import { useFileStore } from "@renderer/stores/files"

export default defineComponent({
  name: "SidebarActions",

  setup() {
    const fs = useFileStore()
    const actions = [
      {
        key: "create",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width={1.5}
            stroke="currentColor"
            class="size-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        ),
        title: "新建",
        disabled: false,
        onClick: () => {
          console.log("Create action clicked")
        }
      },
      {
        key: "open",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width={1.5}
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
            />
          </svg>
        ),
        title: "打开",
        disabled: false,
        onClick: () => {
          fs.openFile()
        }
      }
    ]
    return () => (
      <>
        <div class="flex items-center px-2 py-1 gap-2">
          {actions.map((action) => (
            <ToolButton
              key={action.key}
              title={action.title}
              disabled={action.disabled}
              onClick={action.onClick}
            >
              {action.icon}
            </ToolButton>
          ))}
        </div>
      </>
    )
  }
})
