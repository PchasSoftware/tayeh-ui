<template>
  <!-- <div :class="['inline-block', 'ty-button', ...typeCss, type, size]" @click="handleClick"
    :style="{width, height, borderRadius: radius, borderWidth: outlineWidth}"> -->
  <button :disabled="disabled" :type="buttonType" :class="['inline-block', 'ty-button', ...typeCss, type, size, disabled?'disabled':'']"
    @click="handleClick" 
    @mousedown="(e) => $emit('mousedown', e)"
    @mouseup="(e) => $emit('mouseup', e)"
    @contextmenu="(e) => $emit('contextmenu', e)"
    :style="{width, height, borderRadius: radius, borderWidth: outlineWidth}" :title="title">
      <i v-if="icon" :class="['inline-block','ty-icon', icon]" />
      <div v-if="hasSlot" class="inline-block">
        <slot></slot>
      </div>
  </button>
  <!-- </div> -->
</template>

<script>
  export default {
    name: 'TyButton',
    inheritAttrs: false,
    // *----------------------- P r o p s ----------------------------------------------------------
    props: {
      color: {
        type: String,
        default: 'primary'
      },
      outlineWidth: {
        type: [String, Number],
        default: '2px'
      },
      outlineColor: {
        type: String,
        default: null
      },
      radius: {
        type: [String, Number],
        default: '3px'
      },
      type: {
        type: String,
        default: 'simple'
      },
	  buttonType: {
        type: undefined|'submit'|'button'|'menu'|'reset',
        default: 'simple'
      },
      size: {
        type: String,
        default: '',
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
      title: {
        type: String,
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
        if (this.type == 'simple') return [`ty-bg-${this.color}`];
        if (this.type == 'clear') return ['clear', `ty-color-${this.color}`];
        if (this.type == 'outline') return ['outline', `ty-color-${this.color}`,
          `ty-border-color-${this.outlineColor||this.color}`
        ];
      },
      hasSlot() {
        return !!this.$slots.default
      },
    },

    // *----------------------- L i f e   c i r c l e ---------------------------------------------
    created() {},

    // *----------------------- M e t h o d s -----------------------------------------------------
    methods: {
      handleClick(event) {
        this.$emit('click', event);
      },
    },

    // *----------------------- W a t c h ---------------------------------------------------------
    watch: {}
  }
</script>