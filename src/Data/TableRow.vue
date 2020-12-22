<template>
<tr @click="handleClick">
	<slot/>
</tr>
</template>

<script>
export default {
  name: 'TyTableRow',
  methods: {
	  handleClick(e) {
		  this.$emit('click', e)
	  },
	  handleDblClick(e) {
		  this.$emit('dblClick', e)
	  },
  }
}

</script>
