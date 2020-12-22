<template>
<thead>
<tr :class="['ty-table-header', cssClass]">
	<slot/>
</tr>
</thead>
</template>

<script>
export default {
  name: 'TyTableHeader',

  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
    cssClass: {
      type: String,
      default: 'ty-bg-light'
    }
  },

  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {
      header: true
    }
  },
}

</script>
