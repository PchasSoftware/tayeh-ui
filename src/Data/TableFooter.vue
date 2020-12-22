<template>
<tfoot>
	<tr :class="['ty-table-footer', cssClass]">
		<slot/>
	</tr>
</tfoot>
</template>

<script>
export default {
  name: 'TyTableFooter',

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

</script>
