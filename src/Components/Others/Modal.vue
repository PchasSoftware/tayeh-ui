<template>
  <div :class="['ty-modal-mask',  transparent?'scrollable':'']"  v-if="visible" @click="handleMaskClick"  tabindex="0"> <!-- @keydown.esc.stop="handleClose"-->
    <!-- <div class="ty-modal-wrapper"> -->
      <div :class="['ty-modal-container','my-auto', fullscreen?'fullscreen':'', transparent?'transparent':'']" :style="{width, minWidth, maxWidth, height, minHeight, maxHeight}" @click.stop>
        <div class="ty-flex ty-space-between">
  	    	  <slot name="header"/>
            <span class="fw-semi-bold fs-18" v-if="title">{{title}}</span>
            <ty-button class="mr-auto" color="dark" icon="ty-icon-close" size="small" type="clear" @click="handleClose"/>
        </div>
        <div class="ty-modal-body">
          <slot/>
        </div>
  	    <div class="ty-modal-footer">
  	    	<slot name="footer"/>
          </div>
        </div>
      <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'TyModal',

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
    closeOnBackdropClick: {
      type: Boolean,
      default: true,
    },
    transparent: {
      type: Boolean,
      default: false
    },
	  width: {
		  type: String,
		  default: '1000px'
	  },
	  minWidth: {
		  type: String,
		  default: '200px'
	  },
	  maxWidth: {
		  type: String,
		  default: '90%'
    },
    height: {
		  type: String,
		  default: 'auto'
	  },
	  minHeight: {
		  type: String,
		  default: '300px'
	  },
	  maxHeight: {
		  type: String,
		  default: '90%'
    },
    title: {
      type: [String, Number],
      required: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function,
      required: false
    },
  },

  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  created() {
	  if (this.visible) {
		  this.hideOverflow();
	  }
  },

  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {
	  hideOverflow() {
      window.addEventListener('keydown', this.handleClose)
		  const el = document.body;
      el.classList.add('--hide-overflow')
    },
	  showOverflow() {
		  const el = document.body;
		  el.classList.remove('--hide-overflow')
    },
    handleMaskClick () {
      if (this.canExit && this.closeOnBackdropClick) this.$emit('update:visible', false);
    },
    handleClose (event) {
      if (!this.canExit) return;
      if (typeof event.key !== 'undefined' && event.key !== 'Escape' ) return;
      event.preventDefault()
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide)
      } else {
        this.hide();
      }
    },
    hide() {
      this.$emit('update:visible', false)
    },
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.handleClose)
  },

  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {
    visible: function (val) {
      if (val) return this.hideOverflow()
      this.showOverflow()
    }
  }
}
</script>
