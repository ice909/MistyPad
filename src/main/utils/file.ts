import { dialog } from "electron"
import fs from "fs"
import type { FileMeta } from "@type/index"
import path from "path"
import { formatDate, formatTime } from "@utils/datetime"

// 打开文件对话框
// 只允许选择单个.md文件
export async function openFileDialog(): Promise<FileMeta | null> {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ["openFile"],
    filters: [
      {
        name: "Markdown Files",
        extensions: ["md"]
      }
    ],
    title: "选择一个Markdown文件"
  })
  if (canceled || !filePaths[0]) return null
  const filePath = filePaths[0]
  const fileStat = fs.statSync(filePath)
  if (!fileStat.isFile()) {
    throw new Error("Selected path is not a file")
  }
  // 大文件异步读取
  return fs.promises.readFile(filePath, { encoding: "utf-8" }).then((content) => {
    return {
      path: filePath,
      name: path.basename(filePath) || "Untitled",
      content,
      createdAt: fileStat.birthtimeMs,
      updatedAt: fileStat.mtimeMs,
      createdAtDateStr: formatDate(fileStat.birthtimeMs),
      createdAtTimeStr: formatTime(fileStat.birthtimeMs),
      updatedAtDateStr: formatDate(fileStat.mtimeMs),
      updatedAtTimeStr: formatTime(fileStat.mtimeMs)
    }
  })
}
