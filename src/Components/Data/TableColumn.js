export default {
  name: 'TyTableColumn',
  render() {
    return (
      <div>
        <slot/>
      </div>
    );
  },
  data() {
    return {
      isColumn: true,
    }
  },
  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
    label: {
      type: [String, Number],
      required: false,
    },
    prop: {
      type: [String, Number],
      required: false
    },
    width: {
      type: String,
      default: 'auto'
    },
    minWidth: {
      type: String,
      default: 'auto'
    },
    maxWidth: {
      type: String,
      default: 'auto'
    },
    sortable: {
      type: [Boolean, String],
      default: false
    },
  },
}