import { useFileStore } from "@renderer/stores/files"
import { defineComponent } from "vue"

export default defineComponent({
  name: "FileList",

  setup() {
    const fs = useFileStore()
    return () => (
      <>
        <ul class="menu w-full">
          {fs.files.map((file) => (
            <li key={file.path} class="menu-item">
              <div class="flex flex-col items-start">
                <span class="text-sm font-medium">{file.name}</span>
                <span class="text-xs text-gray-500">
                  {file.createdAtDateStr} {file.createdAtTimeStr}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
  }
})
