<template>
<div
    class="ty-editable-number"
    @dblclick="focus">
  <input
    v-if="editing"
    @blur="blur"
    @change="onInput"
    v-model="content"
    type="number"
    :max="max"
    :min="min"
    class="text-center"
  />
  <p v-else-if="is_currency">
    {{content | currency}}
  </p>
  <p v-else>
    {{content}}
  </p>
</div>
</template>

<script>
export default {
	name: 'TyEditableNumber',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    is_currency: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number
    }
  },
  data() {
    return {
      content: null,
      editing: false
    }
  },
  computed: {
    listeners() {
      return { ...this.$listeners, input: this.onInput };
    },
  },
  mounted() {
    this.content = this.value;
    // this.$refs.editable.innerText = this.value;
  },
  methods: {
    onInput() {
      this.content = this.content.replace(/[^0-9.]/g, "");
      this.$emit('input', parseInt(this.content));
    },
    focus() {      
      this.editing = true;
    },
    blur() {
      this.editing = false;
    }
  },
};
</script>
