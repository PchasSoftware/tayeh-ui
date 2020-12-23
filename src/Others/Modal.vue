<template>
  <div class="ty-modal-mask" v-if="visible" @click="handleMaskClick">
    <div class="ty-modal-wrapper">
      <div :class="['ty-modal-container', fullscreen?'fullscreen':'']" :style="{width}" @click.stop>
        <div class="ty-flex ty-space-between">
  	    	  <slot name="header"/>
            <span class="fw-semi-bold fs-lg" v-if="title">{{title}}</span>
            <ty-button class="mr-auto" color="dark" icon="ty-icon-sort" size="small" type="clear" @click="handleClose"/>
        </div>
        <div class="ty-modal-body">
          <slot/>
        </div>
  	    <div class="ty-modal-footer">
  	    	<slot name="footer"/>
          </div>
        </div>
      </div>
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
		  default: '50%'
	  },
	  minWidth: {
		  type: String,
		  default: '300px'
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
    },
    handleMaskClick () {
      if (this.canExit && this.closeOnBackdropClick) this.$emit('update:visible', false);
    },
    handleClose () {
      if (this.canExit) this.$emit('update:visible', false);
    }
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
