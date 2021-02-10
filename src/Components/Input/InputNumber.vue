<template>
  <div :class="['inline-block','ty-input', 'ty-input-number', size, inputSize ? 'ty-input--' + inputSize : '']">
    <div class="ty-flex">
      <p v-if="label" :class="['ty-input-label', 'mb-1', size||'', error?'ty-color-danger': '']">{{label}} <span
          class="ty-color-danger">{{required?'*':''}}</span></p>
      <div class="inline-block input-test" :style="{lineHeight: height}">
        <span :class="['increase', `ty-bg-${plusColor}`]">
          <i class="ty-icon ty-icon-plus fs-12" />
        </span>
        <span class="input-content">
          <input ref="input" :disabled="disabled" @focus="handleFocus" @blur="handleBlur" @input="handleInput"
            @change="handleChange" :minlength="minLength" :maxlength="maxLength" :min="min" :max="max" :step="step"
            type="number" :placeholder="placeholder" :style="{lineHeight: height, width}" />
        </span>
        <span :class="['decrease', `ty-bg-${plusColor}`]">
          <i class="ty-icon ty-icon-minus fs-12" />
        </span>
      </div>
      <div class="my-auto mr-2">
        <slot name="suffix-outside">

        </slot>
      </div>
      <div v-if="hasButton" class="my-auto">
        <slot name="button" />
      </div>
    </div>
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
        type: Number,
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
        default: '220px'
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
        default: 'border'
      },
      minusColor: {
        type: String,
        default: 'border'
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
      hasButton() {
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
        this.$refs.input.value = this.value || null;
      },
      handlePlusClick() {
        let temp = this.value + this.step;
        if (typeof this.max === 'number' && temp > this.max) temp = Number(this.max);
        this.$refs.input.value = Number(temp);
        this.$emit('input', Number(this.$refs.input.value));
        // this.handleInput()
      },
      handleMinusClick() {
        let temp = this.value - this.step;
        if (typeof this.min === 'number' && temp < this.min) temp = this.min;
        this.$refs.input.value = Number(temp);
        this.$emit('input', Number(this.$refs.input.value));
        // this.handleInput()
      },

    },

    // *----------------------- W a t c h ---------------------------------------------------------
    watch: {}
  }
</script>
<style scoped>
  .input-test {
    position: relative;
  }

  .input-test input {
    display: inline-block;
    padding-left: 50px;
    padding-right: 50px;
    height: 100%;
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
</style>