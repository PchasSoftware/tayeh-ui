<template>
  <div class="ty-acardion">
	  <div v-if="hasHeaderSlot" class="ty-acardion__header">
	  	<slot name="header"/>
	  </div>
	  <div class="ty-acardion__content">
	  	<slot open="1"/>
	  </div>
	  <div v-if="hasFooterSlot" class="ty-acardion__footer">
	  	<slot name="footer"/>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'TyAcardion',

  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
	  height: {
		  type: String,
		  default: 'auto'
	  },
	  open: {
		  type: [String, Number],
		  default: null,
	  }
  },

  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {
		current: null
	}
  },

  provide: function () {
	  return {
		  open: this.getCurrentlyOpen
	  }
  },

  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {
	hasHeaderSlot () {
    	return !!this.$slots['header']
    },
	hasFooterSlot () {
    	return !!this.$slots['footer']
	},
  },

  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  created() {},
  mounted() {
	  this.$on('TyAcardionItemOpen', (index) => {
		this.current = index
	  })
  },
  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {
	  getCurrentlyOpen() {
		  return this.current || this.open
	  }
  }

}
</script>