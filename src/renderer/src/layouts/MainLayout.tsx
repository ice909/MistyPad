import { defineComponent, VNode, type SlotsType } from "vue"

export default defineComponent({
  name: "MainLayout",
  slots: Object as SlotsType<{
    sidebar?: () => VNode
    main?: () => VNode
  }>,
  setup(_, { slots }) {
    return () => (
      <div class="w-full h-full flex">
        <div class="w-50 h-full">{slots.sidebar?.()}</div>
        <div class="divider divider-horizontal m-0"></div>
        <div class="flex-1">{slots.main?.()}</div>
      </div>
    )
  }
})
