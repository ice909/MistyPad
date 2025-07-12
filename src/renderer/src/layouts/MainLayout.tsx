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
        <div class="w-64 h-full bg-white/30 backdrop-blur-lg shadow-xl border-r border-white/20">
          {slots.sidebar?.()}
        </div>
        <div class="flex-1">{slots.main?.()}</div>
      </div>
    )
  }
})
