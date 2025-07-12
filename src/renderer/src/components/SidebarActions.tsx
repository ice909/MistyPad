import { defineComponent } from "vue"

export default defineComponent({
  name: "SidebarActions",

  setup() {
    return () => (
      <ul class="menu menu-horizontal w-full px-2! py-1!">
        <li>
          <a class="p-2!">新建文件</a>
        </li>
      </ul>
    )
  }
})
