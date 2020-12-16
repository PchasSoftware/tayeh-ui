<template>
  <div class="ty-modal" v-if="visible">
	  <div class="ty-modal__backdrop">

	  </div>
    <div>
		<slot name="header"/>
    </div>

	<div>
		<slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentName',

  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
	  visible: {
		  type: Boolean,
		  default: true
	  },
	  canExit: {
		  type: Boolean,
		  default: true
	  },
	  width: {
		  type: String,
		  default: '50%'
	  },
	  minWidth: {
		  type: String,
		  default: '300px'
	  },
	  maxWidth: {
		  type: String,
		  default: '100%'
	  }
  },

  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {}
  },

  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {},

  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  created() {
	  if (this.visible) {
		  this.hideOverflow();
	  }
  },

  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {
	  hideOverflow() {
		  const el = document.body;
		  el.classList.add('--hide-overflow')
	  },
	  showOverflow() {
		  const el = document.body;
		  el.classList.remove('--hide-overflow')
	  }
  },

  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {}
}
</script>
