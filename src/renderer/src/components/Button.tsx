import { defineComponent, type SlotsType, VNode } from "vue"

export default defineComponent({
  name: "ToolButton",
  props: {
    title: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  slots: Object as SlotsType<{
    default?: () => VNode
  }>,

  setup(props, { slots }) {
    return () => (
      <>
        <div class="tooltip tooltip-bottom" data-tip={props.title}>
          <button class="btn btn-square btn-xs btn-ghost" disabled={props.disabled}>
            {slots.default?.()}
          </button>
        </div>
      </>
    )
  }
})
