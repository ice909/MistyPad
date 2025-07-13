import { formatDate, formatTime } from "@utils/datetime"
import { defineStore } from "pinia"
import type { FileMeta } from "@type/index"
import { ref } from "vue"
import { useEditorStore } from "./editor"

export const useFileStore = defineStore(
  "files",
  () => {
    const files = ref<FileMeta[]>([])
    const editor = useEditorStore()

    async function openFile(): Promise<void> {
      console.log("Open file action triggered")
      const fileData = await window.api.openFile()
      if (fileData) {
        console.log("File opened:", fileData)
        console.log("Formatted date:", formatDate(fileData.createdAt))
        console.log("Formatted time:", formatTime(fileData.createdAt))
        // 检查files数组中是否已存在相同路径的文件
        const existingFileIndex = files.value.findIndex((file) => file.path === fileData.path)
        if (existingFileIndex !== -1) {
          return
        }
        files.value.push(fileData)
        editor.setCurrentFile(fileData)
      }
      console.log("Current files in store:", files.value)
    }
    return {
      files,
      openFile
    }
  },
  {
    persist: true
  }
)
