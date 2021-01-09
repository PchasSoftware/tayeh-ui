<template>
  <div class="ty-modal-mask" v-if="visible" @click="handleMaskClick">
    <!-- <div class="ty-modal-wrapper"> -->
      <div :class="['ty-modal-container','my-auto', fullscreen?'fullscreen':'']" :style="{width, minWidth, maxWidth}" @click.stop>
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
		  default: '100%'
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
      window.addEventListener('keyup', this.handleKeyup);
    },
	  showOverflow() {
		  const el = document.body;
		  el.classList.remove('--hide-overflow')
    },
    handleMaskClick () {
      if (this.canExit && this.closeOnBackdropClick) this.$emit('update:visible', false);
    },
    handleClose () {
      if (!this.canExit) return;
      window.removeEventListener('keyup', this.handleKeyup);
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide)
      } else {
        this.hide();
      }
    },
    hide() {
      this.$emit('update:visible', false)
    },
    handleKeyup(e) {
       if(e.key === "Escape") {
        this.handleClose()
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.handleKeyup);
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
