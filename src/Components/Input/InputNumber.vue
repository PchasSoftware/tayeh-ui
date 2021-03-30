<template>
  <div :style="suffixPadding" :class="['inline-block','ty-input', 'ty-input-number', size, inputSize ? 'ty-input--' + inputSize : '']">
    <!-- <div class="inline"> -->
      <p v-if="label" :class="['ty-input-label', 'mb-1', size||'', error?'ty-color-danger': '']">{{label}} <span
          class="ty-color-danger">{{required?'*':''}}</span></p>
      <div class="input-number-wrapper" :style="{lineHeight: height}">
        <span :class="['increase', `ty-bg-${plusColor}`]" @click="handlePlusClick">
          <i class="ty-icon ty-icon-plus fs-12" />
        </span>
        <span class="input-content">
          <input ref="input" :disabled="disabled" @focus="handleFocus" @blur="handleBlur" @input="handleInput"
            @change="handleChange" :minlength="minLength" :maxlength="maxLength" :min="min" :max="max" :step="step"
            type="number" :placeholder="placeholder" :style="{lineHeight: height, height}" />
        </span>
        <span :class="['decrease', `ty-bg-${minusColor}`]" @click="handleMinusClick">
          <i class="ty-icon ty-icon-minus fs-12" />
        </span>
      </div>
      
      <!-- <div v-if="hasButton" class="my-auto">
        <slot name="button" />
      </div> -->
    <!-- </div> -->
    <span v-if="hasSuffix" class="input-number-suffix">
        <slot name="suffix-outside"/>
    </span>
    <!-- <div class="ty-input-main">
      <ty-button class="__input-number-button my-auto" @click="handlePlusClick" :icon="plusIcon" :type="buttonType"
        :color="plusColor" :size="size" />
      <div ref="input-wrapper"
        :class="['my-auto','ty-input-wrapper', size, clear?'--border-clear':'', !clear&&borderBottom?'--border-bottom':'', outline?'ty-input-focus':'', disabled?'disabled':'', error?'ty-color-danger': '']">
        <slot name="prefix">
          <div v-if="icon" class="prefix">
            <i :class="['ty-icon', icon]" />
          </div>
        </slot>
        <input ref="input" :class="[icon?'--input-with-prefix':'']" />
        <div :class="['suffix', dir==='ltr'?'suffix--ltr':'']">
          <slot name="suffix" />
          <i v-if="error" class="ty-icon ty-icon-warning" />
        </div>
      </div>
      <ty-button class="__input-number-button my-auto" @click="handleMinusClick" :icon="minusIcon" :type="buttonType"
        :size="size" />
      <div v-if="hasButton" class="my-auto">
        <slot name="button" />
      </div>
    </div> -->
  </div>
</template>

<script>
  import emitter from '../../mixins/emitter';
  // 
  export default {
    name: 'TyInputNumber',
    mixins: [emitter],
    // *----------------------- P r o p s ----------------------------------------------------------
    props: {
      value: {
        type: [Number, String],
        default: 0
      },
      height: {
        type: [String, Number],
        default: '48px'
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
      size: {
      type: [String, Number],
        default: 'normal',
        required: false
      },
      suffixWidth: {
          type: Number,
          default: 32
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
        type: [Number, String],
        required: false
      },
      maxLength: {
        type: [Number, String],
        required: false
      },
      min: {
        type: [Number, String],
        required: false
      },
      max: {
        type: [Number, String],
        required: false
      },
      step: {
        type: [Number, String],
        default: 1
      },
      required: {
        type: Boolean,
        default: false
      },
      rows: {
        type: [Number, String],
        default: 10
      },
      cols: {
        type: [Number, String],
        default: 10
      },
      plusIcon: {
        type: String,
        default: 'ty-icon-plus'
      },
      minusIcon: {
        type: String,
        default: 'ty-icon-minus'
      },
      plusColor: {
        type: String,
        default: 'white'
      },
      minusColor: {
        type: String,
        default: 'white'
      },
      buttonType: {
        type: String,
        default: 'outline'
      }
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
      hasSuffix() {
        return this.$slots['suffix-outside'];
      },
      suffixPadding() {
        return !this.hasSuffix?{}:{paddingLeft: `${this.suffixWidth+8}px`}
      }
    },

    // *----------------------- L i f e   c i r c l e ---------------------------------------------
    mounted() {
      this.setNativeInputValue();
    },

    // *----------------------- M e t h o d s -----------------------------------------------------
    methods: {
      handleInput(event) {
        this.$emit('input', Number(event.target.value));
        this.$nextTick(this.setNativeInputValue);
      },
      handleChange(event) {
        this.$emit('change', Number(event.target.value));
        this.error = this.required && !event.target.value
      },
      handleFocus(event) {
        this.outline = true;
        this.$emit('focus', event);
      },
      handleBlur(event) {
        this.outline = false;
        this.$emit('blur', event);
      },
      setNativeInputValue() {
        this.$refs.input.value = Number(this.value) || null;
      },
      handlePlusClick() {
        if (this.disabled) return
        let temp = this.value + this.step;
        if (typeof this.max === 'number' && temp > this.max) temp = Number(this.max);
        this.$refs.input.value = Number(temp);
        this.$emit('input', Number(this.$refs.input.value));
        // this.handleInput()
      },
      handleMinusClick() {
        if (this.disabled) return
        let temp = this.value - this.step;
        if (typeof this.min === 'number' && temp < this.min) temp = this.min;
        this.$refs.input.value = Number(temp);
        this.$emit('input', Number(this.$refs.input.value));
        // this.handleInput()
      },

    },

    // *----------------------- W a t c h ---------------------------------------------------------
    watch: {
      value() {
        this.setNativeInputValue();
      }
    }
  }
</script>
<style scoped>
  .input-number-wrapper {
    position: relative;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
  }

  .input-number-wrapper input {
    display: inline-block;
    padding-left: 50px;
    padding-right: 50px;
    height: 100%;
  }

  .input-number-suffix {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    
  }
  .increase,
  .decrease {
    position: absolute;
    text-align: center;
    cursor: pointer;
    top: 1px;
    width: 38px;
    bottom: 1px;
    font-size: 4px;
  }

  .increase {
    right: 1px;
    border-left: 1px solid #dcdfe6;
    border-radius: 0 3px 3px 0;
  }

  .increase i,
  .decrease i {
    display: inline-block;
    vertical-align: baseline;
  }

  .decrease {
    left: 1px;
    border-radius: 3px 0px 0px 3px;
    border-right: 1px solid #dcdfe6;
  }
  .input-content input {
    border: none;
    border-radius: 3px;
  }
</style>