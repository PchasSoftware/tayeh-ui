export default {
  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
    cssClass: {
      type: String,
      default: 'ty-bg-light',
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  render(h) {
    const {
      columns
      } = this;
    return (
      <thead>
      {
        columns.map((column, i) => (
          <th key={i} title={columns.label} style={{minWidth: column.minWidth, maxWidth: column.maxWidth, width: column.width}} 
          // click={handleClick} dblclick={handleDblClick}
          >
              {column.label}
          </th>
        ))
      }
      </thead>
    )
  },
  created() {
  },
  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {
      header: true
    }
  },
}
