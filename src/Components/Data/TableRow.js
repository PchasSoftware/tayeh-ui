export default {
  render() {
	  return (
		  <tr>
		
		  	test
		  </tr>
	  )
  },
  methods: {
	  handleClick(e) {
		  this.$emit('rowClick', e)
	  },
	  handleDblClick(e) {
		  this.$emit('rowDblClick', e)
	  },
  }
}