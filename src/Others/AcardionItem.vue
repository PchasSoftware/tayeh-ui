<template>
  <div class="ty-acardion-item">
	  <div class="ty-acardion-item__header" @click="openItem">
		  <div>{{label}}</div>
		  <div class="ty-acardion-item__icon" :class="{active}">
		  	<i :class="['ty-icon','ty-icon-arrow-right']"/>
		  </div>
	  </div>
	   <!-- active?'ty-icon-arrow-down':'ty-icon-arrow-right' -->
	  <div class="ty-acardion-item__content" :class="{inactive: !active}" :style="{maxHeight}">
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
		  type: String,
		  required: true
	  },
	  maxHeight: {
		  type: String,
		  default: '500px'
	  }
  },
  data() {
	  return {
		  indexValue: null
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
		//   this.indexValue = this.index;
		//   this.$emit('TyAcardionItemOpen', this.index);
		console.log(this.open, this.index);
		this.$parent.$emit('TyAcardionItemOpen', this.open()==this.index?'close':this.index)
	  }
  },

  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {}
}
</script>