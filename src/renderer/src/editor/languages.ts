import { LanguageDescription } from "@codemirror/language"

export const languages = [
  LanguageDescription.of({
    name: "JavaScript",
    alias: ["ecmascript", "js", "node"],
    extensions: ["js", "mjs", "cjs"],
    load() {
      return import("@codemirror/lang-javascript").then((m) => m.javascript())
    }
  }),
  LanguageDescription.of({
    name: "CSS",
    extensions: ["css", "pcss"],
    load() {
      return import("@codemirror/lang-css").then((m) => m.css())
    }
  })
]
