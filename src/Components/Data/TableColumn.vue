<template>
<th v-if="isTh" :title="value" :style="{minWidth, maxWidth, width}" @click="handleClick" @dblclick="handleDblClick">
  <slot>
    {{label}}
  </slot>
</th>
<td v-else :title="label" @click="handleClick" @dblclick="handleDblClick">
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
      type: [String, Number],
      required: false,
    },
    value: {
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
    }
  },

  // *----------------------- D a t a -----------------------------------------------------------

  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {
    isTh () {
      return this.$parent._data.header || false;
    }
  },

  // *----------------------- L i f e   c i r c l e ---------------------------------------------

  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
    handleDblClick(e) {
      this.$emit('dblClick', e);
    }
    
  },

  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {},
}

</script>
