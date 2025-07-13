import { defineComponent, PropType, type SlotsType, VNode } from "vue"

export default defineComponent({
  name: "ToolButton",
  inheritAttrs: true,
  props: {
    title: String,
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: Function as PropType<() => void>
  },
  slots: Object as SlotsType<{
    default?: () => VNode
  }>,

  setup(props, { slots }) {
    return () => (
      <>
        <div class="tooltip tooltip-bottom" data-tip={props.title}>
          <button
            class="btn btn-square btn-xs btn-ghost"
            disabled={props.disabled}
            onClick={props.onClick}
          >
            {slots.default?.()}
          </button>
        </div>
      </>
    )
  }
})
