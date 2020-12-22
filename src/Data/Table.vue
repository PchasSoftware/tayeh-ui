<template>
  <div style="overflow: auto">
    <table :class="['ty-table',striped?'ty-table-striped':'ty-table-simple', divided?'ty-table-divided':'']">
      <slot/>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TyTable',
  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
    headerCss: {
      type: String,
      required: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    divided: {
      type: Boolean,
      default: false
    },
  },
}
</script>