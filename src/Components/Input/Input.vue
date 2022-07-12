<template>
  <div :class="['ty-input', inputSize ? 'el-input--' + inputSize : '']">
    <p v-if="label" :class="['fs-12 fs-sm-14 ty-input-label', 'mb-1', size||'', error?'ty-color-danger': '']">{{label}}</p>
    <!-- <div class="inline-block"> -->
      <div ref="input-wrapper" :class="['ty-input-wrapper', size, clear?'--border-clear':'', !clear&&borderBottom?'--border-bottom':'', outline?'ty-input-focus':'', disabled?'disabled':'', error?'ty-color-danger ty-border-color-danger': '']">
        <slot name="prefix">
        <div v-if="icon" :class="['prefix', type==='textarea'?'prefix__textarea':'']">
          <i :class="['ty-icon', icon]"/>
        </div>
        </slot>
        <input
        :autocomplete="autocomplete"
		v-if="type!=='textarea'"
        ref="input"
        :dir="dir"
        :value="value"
          :disabled="disabled"
          @focus="handleFocus"
          @blur="handleBlur"
				  @keydown="keydown"
          @keypress="keypress"
          @keyup="keyup"
          :minlength="minLength"
          :maxlength="maxLength"
          :min="min"
          :max="max"
          :step="step"
         @input="handleInput" @change="handleChange" :type="show_pass?'text':type" :name="name" :placeholder="placeholder" :class="[icon?'--input-with-prefix':'']"/>
		 <textarea
		    v-else
		    ref="input"
        :value="value"
		    :rows="rows"
		    :cols="cols"
        :dir="dir"
        :minlength="minLength"
        :maxlength="maxLength"
        :disabled="disabled"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput" @change="handleChange" :placeholder="placeholder" :name="name" :class="[size, icon?'--input-with-prefix':'']" :style="{resize: resizable?'auto':'none'}"/>
        <div :class="['suffix', dir==='ltr'?'suffix--ltr':'']">
          <slot name="suffix">
            <div class="ty-flex align-items-center" v-if="type==='password'" @click.stop.prevent="show_pass=!show_pass">
                <i :class="['ty-icon px-1',show_pass?'ty-icon-visibility ty-color-primary':'ty-icon-eye-close ty-color-border']"/>
            </div>
          </slot>
          <i v-if="error" class="ty-icon ty-icon-warning"/>
        </div>
      </div>
      <div v-if="hasButton"  class="m-1">
        <slot name="button"/>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
  import emitter from '../../mixins/emitter';
// 
export default {
  name: 'TyInput',
  mixins: [emitter],
  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
    value: [String, Number],
	  type: {
		  type: String,
		  default: 'text',
		  required: false
    },
    name: {
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
    minLength: {
      type: Number,
      required: false
    },
    maxLength: {
      type: Number,
      required: false
    },
    min: {
      type: Number,
      required: false
    },
    max: {
      type: Number,
      required: false
    },
    step: {
      type: Number,
      required: false
    },
    required: {
      type: Boolean,
      default: false
    },
    resizable: {
      type: [Boolean],
      default: true
      },
    isError: [Boolean],
    errorFunction:  [Function],
    checkMounted: [Boolean],
	  rows: {
	  	type: [Number, String],
	  	default: 4
	  },
    autocomplete: {
      type: String,
      default: 'off'
    },
	  cols: {
	  	type: [Number, String],
	  	required: false
	  },
  },

  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {
      outline: false,
      launched: false,
      show_pass: false,
    }
  },

  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {
    inputSize() {
        return this.size;
    },
    hasButton () {
      return this.$slots.button;
    },
    error() {
      if (typeof this.errorFunction == 'function') this.error = this.errorFunction(this.value)
      return (
        typeof this.isError !== 'undefined' && this.isError
        )||(
          this.required && (this.launched||this.checkMounted) && (this.value==null || (''+this.value).length===0)
        )
    }
  },

  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  mounted() {
    this.setNativeInputValue();
  },



  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
      this.$nextTick(this.setNativeInputValue);
      this.launched = true;
    },
    handleChange(event) {
      this.$emit('change', event.target.value);
      this.launched = true;
    },
    handleFocus (event) {
      this.outline = true;
      this.$emit('focus', event);
      this.launched = true;
    },
    handleBlur (event) {
      this.outline = false;
      this.$emit('blur', event);
    },
    keydown (event) {
      this.$emit('keydown', event);
    },
    keyup (event) {
      this.$emit('keyup', event);
    },
    keypress (event) {
      this.$emit('keypress', event);
    },
    focus (options=null) {
      this.$refs.input.focus(options)
    },
    blur () {
      this.$refs.input.blur()
    },
    setNativeInputValue() {
      this.$refs.input.value = this.value || null;
    }
  }
}
</script>