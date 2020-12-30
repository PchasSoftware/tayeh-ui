<template>
  <div :class="['ty-input', inputSize ? 'el-input--' + inputSize : '']" :style="{width}">
    <p v-if="label" :class="['ty-input-label', 'mb-1', size||'', error?'ty-color-danger': '']">{{label}} <span class="ty-color-danger">{{required?'*':''}}</span></p>
    <div class="ty-flex ty-flex-wrap">
      <div ref="input-wrapper" :class="['ty-input-wrapper', size, clear?'--border-clear':'', !clear&&borderBottom?'--border-bottom':'', outline?'ty-input-focus':'', disabled?'disabled':'', error?'ty-color-danger': '']">
        <slot name="prefix">
        <div v-if="icon" :class="['prefix', type==='textarea'?'prefix__textarea':'']">
          <i :class="['ty-icon', icon]"/>
        </div>
        </slot>
        <input
		v-if="type!=='textarea'"
        ref="input"
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
         @input="handleInput" @change="handleChange" :type="type" :placeholder="placeholder" :class="[icon?'--input-with-prefix':'']"/>
		 <textarea
		    v-else
		    ref="input"
		    :rows="rows"
		    :cols="cols"
        :minlength="minLength"
        :maxlength="maxLength"
        :disabled="disabled"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput" @change="handleChange" :placeholder="placeholder" :class="[size, icon?'--input-with-prefix':'']"/>
        <div :class="['suffix', dir==='ltr'?'suffix--ltr':'']">
          <slot name="suffix"/>
          <i v-if="error" class="ty-icon ty-icon-warning"/>
        </div>
      </div>
      <div v-if="hasButton"  class="m-1">
        <slot name="button"/>
      </div>
    </div>
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
    width: {
      type: String,
      default: 'auto'
    },
    required: {
      type: Boolean,
      default: false
	},
	rows: {
		type: [Number, String],
		default: 4
	},
	cols: {
		type: [Number, String],
		required: false
	},
  },

  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {
      content: null,
      outline: false,
      error: false
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
  mounted() {
    this.setNativeInputValue();
  },

  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
      this.$nextTick(this.setNativeInputValue);
    },
    handleChange() {
      this.$emit('change', event.target.value);
      this.error = this.required && !event.target.value
    },
    handleFocus (event) {
      this.outline = true;
      this.$emit('focus', event);
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
    setNativeInputValue() {
      this.$refs.input.value = this.value || null;
    }
    
  },

  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {}
}
</script>