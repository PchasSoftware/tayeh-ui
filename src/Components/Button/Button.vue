<template>
  <button :disabled="disabled" class="ty-flex ty-button ty-hoverable" :class="[...typeCss, type, size, disabled?'disabled':'']" :style="{width, height}" @click.stop="handleClick">
    <div class="ty-flex ty-gap-5 ty-justify-center">
	  <i v-if="icon" :class="['my-auto', 'ty-icon', icon]"/>
	  <slot></slot>
    </div>
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
    width: {
      type: [Number, String],
      required: false
    },
    height: {
      type: [Number, String],
      required: false
    },
    disabled: Boolean,
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