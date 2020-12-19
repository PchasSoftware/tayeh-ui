<template>
  <button class="ty-button ty-hoverable" :class="[...typeCss, type, size]" @click.stop="handleClick">
	  <i v-if="icon" class="ty-button__icon ty-icon" :class="icon"/>
	  <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TyButton',

  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
	  color: {
		  type: String,
		  default: 'primary'
    },
    type: {
      type: String,
      default: 'simple'
    },
    size: {
      type: String,
      default: 'medium',
    },
    icon: {
      type: String,
      default: null
    },
    disabled: Boolean,
    default: false
  },

  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {}
  },

  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {
    typeCss() {
      if (this.type=='simple') return [`ty-bg-${this.color}`];
      if (this.type=='clear') return ['clear', `ty-color-${this.color}`];
      if (this.type=='outline') return ['outline', `ty-color-${this.color}`, `ty-outline-${this.color}`];
    }
  },

  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  created() {},

  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {
	  handleClick(event) {
		  this.$emit('click', event);
	  }
  },

  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {}
}
</script>