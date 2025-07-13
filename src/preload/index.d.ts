import { ElectronAPI } from "@electron-toolkit/preload"
import type { FileMeta } from "../type/index"

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      openFile: () => Promise<FileMeta | null>
    }
  }
}
