<template>
  <div :class="['ty-select', size]">
	  <p v-if="label" :class="['ty-input-label', size||'', error?'ty-color-danger': '']">{{label}} <span class="ty-color-danger">{{required?'*':''}}</span></p>
	  <div class="ty-select__search">
		  	<div class="ty-input-wrapper" :class="{disabled}">
    		  <input
			  	:disabled="disabled"
				@focus="handleFocus"
				@blur="blur"
				@keydown.down.stop="nextOption"
				@keydown.up.stop="prevOption"
				@keydown.enter="selectByKeboard"
				@keydown.esc.stop.prevent="handleClose"
        		@keydown.tab="visible = false"
			   @input="handleChange" v-model="search_content" :placeholder="placeholder"
			   ref="input"/>
    		  <div @click="handleButtonClick" :class="['suffix', dir==='ltr'?'suffix--ltr':'']">
    		    <i class="ty-icon ty-icon-small ty-color-dark" :class="[visible?'ty-icon-arrow-drop-up':'ty-icon-arrow-drop-down']"/>
    		  </div>
    		</div>
	  </div>
	  <div v-show="visible" class="ty-select__dropdown">
		  <div @click="handleOptionClick(item)" v-for="(item, i) in search_results" :key="i" class="ty-dropdown-item" :class="{'ty-dropdown-item-hovered': hovered_option==i}">
			  {{item.label||item.name}}
		  </div>
	  </div>
	  <div class="ty-destroy">
		  <slot/>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'TySelect',

  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
	  value: {
		  default: null
	  },
	  placeholder: {
		  type: String,
		  default: 'لطفا انتخاب کنید',
		  required: false
	  },
	  lazyload: {
		  type: Function,
		  default: null,
		  required: false
	  },
	  dir: {
		  type: String,
		  default: 'rtl'
	  },
	  size: {
		  type: String,
		  default: 'normal'
	  },
	  disabled: {
		  type: Boolean,
		  default: false
	  },
	  label: {
		  type: String,
		  required: false
	  },
	  required: {
		  type: Boolean,
		  default: false
	  },
  },

  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {
		options: [],
		content: null,
		search_content: '',
		search_results: [],
		visible: false,
		hovered_option: 0,
		error: false,
	}
  },

  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {},

  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  created() {
	  this.options = this.$children;
  },
  mounted() {
	this.content = this.value;
	this.defaultSearchFunction();
	this.resetSearch();
  },

  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {
	  resetSearch() {
		const i = this.options.map(e => {return e.value}).indexOf(this.content);
	  	if (i!==-1) this.search_content = this.options[i].label||this.options[i].value
	  },
	  handleButtonClick () {
		  this.visible?this.$refs.input.blur():this.$refs.input.focus();
	  },
	  handleOptionClick (item) {
		  this.content = item.value
		  this.search_content = item.label;
		  this.$emit('input', item.value);
		  this.error = this.required && !this.content;
	  },
	  async handleChange (event) {
		  this.hovered_option = 0;
		  this.search_results = [];
		  if (this.lazyload)  {
			  this.search_results = await this.lazyload(event.target.value)
		  } else {
			  this.defaultSearchFunction()
		  }
		  this.visible = true;
	  },
	  defaultSearchFunction () {
		  this.search_results = this.options.filter(this.searchFilter)
	  },
	  searchFilter (item) {
		  const value_contains = item.value.includes(this.search_content);
		  const label_contains = item.label.includes(this.search_content);
		  return (value_contains||label_contains)
	  },
	  handleFocus () {
		  this.visible = true;
		  this.$emit('focus', event);
	  },
	  blur() {
		  setTimeout(() => {
			  this.visible = false;
		  }, 100);
		  this.error = this.required && !this.content;
		  if (this.content) this.resetSearch();
        // this.$refs.reference.blur();
	  },
	  handleClose() {
		this.resetSearch();
		this.visible = false;
		this.error = this.required && !this.content;
	  },
	  selectByKeboard () {
		  if (this.search_results.length>=this.hovered_option) this.handleOptionClick(this.search_results[this.hovered_option])
		  this.visible = false;
	  },
	  nextOption () {
		  this.hovered_option++;
		  if (this.hovered_option>=this.search_results.length) this.hovered_option = 0;
		  if (this.search_results.length>0) this.visible = true;
	  },
	  prevOption () {
		  this.hovered_option--;
		  if (this.hovered_option<0) this.hovered_option = 0;
		  if (this.search_results.length>0) this.visible = true;
	  }
  },

  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {}
}
</script>
