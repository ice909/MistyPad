import { defineComponent } from "vue"

export default defineComponent({
  name: "App",

  setup() {
    return () => (
      <>
        <div id="app">
          <h1>首页</h1>
        </div>
      </>
    )
  }
})
