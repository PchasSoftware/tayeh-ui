<template>
<tr>
	<slot/>
</tr>
</template>

<script>
export default {
  name: 'TyTableRow',
  props: {
	  data: {
		  type: Object,
		  required: true
	  }
  }
  // *----------------------- P r o p s ----------------------------------------------------------
}

</script>
