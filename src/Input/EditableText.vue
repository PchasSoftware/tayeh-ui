<template>
  <p
    ref="editable"
    :class="['ty-editable-text',disabled?'':'edit']"
    :contenteditable="!disabled"
    v-on="listeners"
  />
</template>

<script>
export default {
	name: 'TyEditableText',
	props: {
    	value: {
    	  type: String,
    	  default: '',
    	},
    	placeholder: {
    	  type: String,
    	  default: '',
    	},
    	disabled: {
    	  type: Boolean,
    	  default: false,
    	  required: false
    	}
  },
  computed: {
    listeners() {
      return { ...this.$listeners, input: this.onInput };
    },
  },
  mounted() {
    if (this.value) this.$refs.editable.innerText = this.value;
    else  this.$refs.editable.innerText = this.placeholder;
    // if (!this.disabled) this.$refs.editable.attr('contenteditable', true)
    // this.$refs.editable.innerText = this.value;
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.innerText);
    },
  },
};
</script>