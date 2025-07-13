import { defineStore } from "pinia"
import { ref } from "vue"
import type { FileMeta } from "@type/index"

export const useEditorStore = defineStore(
  "editor",
  () => {
    const currentFile = ref<FileMeta | null>(null)
    const isEditing = ref(false)

    function setCurrentFile(file: FileMeta): void {
      currentFile.value = file
      isEditing.value = true
    }

    function clearCurrentFile(): void {
      currentFile.value = null
      isEditing.value = false
    }

    return {
      currentFile,
      isEditing,
      setCurrentFile,
      clearCurrentFile
    }
  },
  {
    persist: true
  }
)
