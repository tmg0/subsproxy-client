const VisuallyHidden = defineComponent({
  props: {
    as: {
      type: String as PropType<'div'>,
      default: 'div'
    }
  },

  setup (props, { slots }) {
    return () => (
      <props.as
        style={{
          position: 'absolute',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          margin: 0,
          padding: 0,
          height: '1px',
          width: '1px',
          clip: 'rect(0 0 0 0)',
          clipPath: 'inset(100%)'
        }}
      >
        {slots.default?.()}
      </props.as>
    )
  }
})

export default VisuallyHidden
