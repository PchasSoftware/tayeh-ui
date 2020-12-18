<template>
  <div :class="['ty-input', inputSize ? 'el-input--' + inputSize : '']" :style="{width}">
    <p v-if="label" :class="`ty-input-label ${size}`">{{label}}</p>
    <div class="ty-flex ty-flex-wrap">
      <div ref="input-wrapper" class="ty-input-wrapper m-1" :class="[clear?'--border-clear':'', !clear&&borderBottom?'--border-bottom':'', outline?'ty-input-focus':'', disabled?'disabled':'']">
        <div v-if="icon" class="prefix">
          <i :class="['ty-icon', icon]"/>
        </div>
        <input
          :disabled="disabled"
          @focus="handleFocus"
          @blur="handleBlur"
         @input="handleInput" @change="handleChange" v-model="content" :type="type" :placeholder="placeholder" :class="[size, icon?'--input-with-prefix':'']"/>
        <div :class="['suffix', dir==='ltr'?'suffix--ltr':'']">
          <slot name="suffix"/>
        </div>
      </div>
      <div v-if="hasButton"  class="m-1">
        <slot name="button"/>
      </div>
    </div>
  </div>
</template>

<script>
  import emitter from '../mixins/emitter';
// 
export default {
  name: 'TyInput',
  mixins: [emitter],
  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
    value: {
      type: String,
      default: '',
    },
	  type: {
		  type: String,
		  default: 'text',
		  required: false
    },
    size: {
      type: String,
      default: 'normal',
      required: false
    },
    placeholder: {
      type: String,
      default: null,
      required: false
    },
    label: {
      type: String,
      default: null,
      required: false
    },
	  dir: {
	  	type: String,
	  	default: 'rtl',
    },
    clear: {
      type: Boolean,
      default: false
    },
    borderBottom: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 'auto'
    }
  },

  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {
      content: null,
      outline: false,
    }
  },

  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {
    inputSize() {
        return this.size;
    },
    hasButton () {
      return this.$slots.button;
    }
  },

  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  created() {},

  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
      this.$nextTick(this.setNativeInputValue);
    },
    handleChange() {
      this.$emit('change', event.target.value);
    },
    handleFocus (event) {
      this.outline = true;
      this.$emit('focus', event);
    },
    handleBlur (event) {
      this.outline = false;
      this.$emit('blur', event);
    },
    
  },

  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {}
}
</script>