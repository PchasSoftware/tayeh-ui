<template>
  <div class="ty-border" :style="{width, borderRadius, borderColor}">
    <div class="ty-flex ty-flex-row py-2 px-4">
	    <i v-if="icon" class="my-auto ty-icon ml-2" :class="[icon, 'ty-color-'+color, iconSize]"/>
	    <div class="ty-flex ty-flex-col">
        <div class="fw-bolder" :class="['ty-color-'+color, labelSize]">
	    	  <slot name="label"/>
        </div>
        <slot/>
	    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TyBorder',

  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
	  icon: {
		  type: String,
		  default: null
    },
    iconSize: {
      type: [String, Number],
      default: 'fs-48'
    },
    labelSize: {
      type: [String, Number],
      default: 'fs-14'
    },
    color: {
      type: String,
      default: 'primary'
    },
    borderRadius: {
      type: [String, Number],
      default: '4px'
    },
    borderColor: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    }
  },

  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {}
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

  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {},

  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {}
}
</script>