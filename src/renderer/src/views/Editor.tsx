import { defineComponent, watch } from "vue"
import { useEditorStore } from "@renderer/stores/editor"
import { Milkdown, useEditor } from "@milkdown/vue"
import { defaultValueCtx, Editor, rootCtx } from "@milkdown/kit/core"
import { replaceAll } from "@milkdown/kit/utils"
import { commonmark } from "@milkdown/kit/preset/commonmark"
import { nord } from "@milkdown/theme-nord"
import { indent } from "@milkdown/kit/plugin/indent"
import { cursor } from "@milkdown/kit/plugin/cursor"
import { clipboard } from "@milkdown/kit/plugin/clipboard"
import { gfm } from "@milkdown/kit/preset/gfm"
import { block } from "@milkdown/kit/plugin/block"
import { history, historyKeymap } from "@milkdown/plugin-history"
import { prism, prismConfig } from "@milkdown/plugin-prism"
import css from "refractor/css"
import javascript from "refractor/javascript"
import jsx from "refractor/jsx"
import cpp from "refractor/cpp"
import typescript from "refractor/typescript"

export default defineComponent({
  name: "Editor",

  setup() {
    const editor = useEditorStore()
    let editorInstance: Editor

    useEditor((root) => {
      editorInstance = Editor.make()
        .config(nord)
        .config((ctx) => {
          ctx.set(rootCtx, root)
          ctx.set(defaultValueCtx, editor.currentFile?.content || "")
          ctx.set(historyKeymap.key, {
            Undo: { shortcuts: ["Mod-z"] },
            Redo: { shortcuts: ["Mod-y", "Shift-Mod-z"] }
          })
          ctx.set(prismConfig.key, {
            configureRefractor: (refactor) => {
              refactor.register(css)
              refactor.register(javascript)
              refactor.register(jsx)
              refactor.register(cpp)
              refactor.register(typescript)
            }
          })
        })
        .use(commonmark)
        .use(indent)
        .use(cursor)
        .use(clipboard)
        .use(history)
        .use(gfm)
        .use(block)
        .use(prism)
      return editorInstance
    })

    watch(
      () => editor.currentFile,
      () => {
        if (editor.currentFile?.content)
          editorInstance.action(replaceAll(editor.currentFile?.content))
      }
    )

    return () => (
      <>
        <Milkdown class="w-full h-full" />
      </>
    )
  }
})
