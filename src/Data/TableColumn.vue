<template>
<th v-if="isInsideHeader" :title="value">
  <slot>
    {{label}}
  </slot>
</th>
<td v-else :title="label">
  <slot>
    {{value}}
  </slot>
</td>
</template>

<script>
export default {
  name: 'TyTableColumn',

  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: false
    }
  },

  // *----------------------- D a t a -----------------------------------------------------------

  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {
    isInsideHeader () {
      return this.$parent._data.header || false;
    }
  },

  // *----------------------- L i f e   c i r c l e ---------------------------------------------

  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {},

  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {},
}

</script>
