<template>
  <div :class="['ty-acardion-item', showBorders?'show-border':'', active?'active ':'']">
	  <div class="ty-acardion-item__header ty-flex ty-gap-10 align-items-center" @click="openItem">
		  <!-- <div :class="['ty-acardion-item__icon', ]"> -->
		  	<!-- <i :class="['ty-icon ty-icon-arrow-down']"/> -->
		  <!-- </div> -->
		  <strong class="pl-4 fw-600">{{label}}</strong>
	  </div>
	   <!-- active?'ty-icon-arrow-down':'ty-icon-arrow-right' -->
	  <div ref="acardionContent" :class="['ty-acardion-item__content']" :style="{maxHeight: active?maxHeight:0}">
	  	<slot/>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'TyAcardionItem',

  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
	  label: {
		  type: String,
		  required: true
	  },
	  index: {
		  type: [String, Number],
		  required: true
	  },
	  maxHeight: {
		  type: [String, Number],
		  default: '500px'
	  },
	  showBorders: {
		  type: Boolean,
		  default: false
	  }
  },

  // *----------------------- D a t a -----------------------------------------------------------

  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {
	  active() {
		  return this.index==this.open()
	  }
  },
  inject: ['open'],
  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {
	  openItem () {
		this.$parent.$emit('TyAcardionItemOpen', this.open()==this.index?'close':this.index)
	  }
  }
}
</script>