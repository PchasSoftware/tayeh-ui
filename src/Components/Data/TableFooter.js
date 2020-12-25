export default {
  render() {
    return (
      <tfoot>
      	<tr class={['ty-table-footer', cssClass]}>
      		<slot/>
      	</tr>
      </tfoot>
    )
},
  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
    cssClass: {
      type: String,
      default: 'ty-bg-unset'
    }
  },

  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {
      footer: true
    }
  },
}