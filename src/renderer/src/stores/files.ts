import { formatDate, formatTime } from "@utils/datetime"
import { defineStore } from "pinia"
import type { FileMeta } from "@type/index"
export const useFileStore = defineStore("files", {
  state: () => ({
    files: [] as FileMeta[]
  }),
  actions: {
    async openFile() {
      console.log("Open file action triggered")
      const fileData = await window.api.openFile()
      if (fileData) {
        console.log("File opened:", fileData)
        console.log("Formatted date:", formatDate(fileData.createdAt))
        console.log("Formatted time:", formatTime(fileData.createdAt))
        this.files.push(fileData)
      }
      console.log("Current files in store:", this.files)
    }
  },
  persist: true
})
