<template>
	<div :class="['ty-select', size]">
		<div class="ty-select__search" ref="select">
			<ty-input v-if="searchable" ref="input" :disabled="disabled" v-model="search_content" :label="label" :required="required"
				:dir="dir" :size="size" :placeholder="placeholder" @focus="handleFocus" @blur="blur"
				@keydown.down.stop="nextOption" @keydown.up.stop="prevOption" @keydown.enter="selectByKeboard"
				@keydown.esc.stop.prevent="handleClose" @keydown.tab="visible = false" @input="handleChange">
				<div slot="suffix" @click="handleButtonClick">
					<i class="ty-icon ty-icon-small ty-color-dark"
						:class="[visible?'ty-icon-arrow-drop-up':'ty-icon-arrow-drop-down']" />
				</div>
			</ty-input>
			<ty-input class="nocaret" v-else ref="input" :value="search_content" :disabled="disabled" :label="label" :required="required"
				:dir="dir" :size="size" :placeholder="placeholder" @focus="handleFocus" @blur="blur"
				@keydown.down.stop="nextOption" @keydown.up.stop="prevOption" @keydown.enter="selectByKeboard"
				@keydown.esc.stop.prevent="handleClose" @keydown.tab="visible = false" @input="handleChange">
				<div slot="suffix" @click="handleButtonClick">
					<i class="ty-icon ty-icon-small ty-color-dark"
						:class="[visible?'ty-icon-arrow-drop-up':'ty-icon-arrow-drop-down']" />
				</div>
			</ty-input>
			<!-- <div class="ty-input-wrapper" :class="{disabled}">
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
    		</div> -->
		</div>
		<div v-show="visible" class="ty-select__dropdown" :style="dropdown_position" ref="dropdown">
			<div  @click="handleCreateNew" v-if="show_new" class="ty-dropdown-item ty-flex ty-space-between ty-dropdown-item-new">
				{{search_content}} <i class="ty-icon ty-icon-sort my-auto ty-color-gray"/>
			</div>
			<div @click="handleOptionClick(item)" v-for="(item, i) in search_results" :key="i" class="ty-dropdown-item ty-flex ty-space-between"
				:class="{'ty-dropdown-item-hovered': hovered_option==i}">
				{{item.label||item.value||item.name}} <ty-button color="danger" v-if="showDelete" @click="handleDelete(item, i)" size="small" icon="ty-icon-delete"/>
			</div>
		</div>
		<div class="ty-destroy">
			<slot />
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
			searchable: {
				type: Boolean,
				default: true
			},
			showDelete: {
				type: Boolean,
				default: false
			},
			permitCreate: {
				type: Boolean,
				default: false
			}
		},

		computed: {
			show_new() {
				return this.searchable&&this.permitCreate&&!this.disabled&&this.search_content!==null&&(''+this.search_content).length>0&&this.options.findIndex(x => x.value === this.search_content)===-1
			}
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
				dropdown_position: {
					top: 'auto',
					left: 'auto',
					right: 'auto',
					bottom: 'auto'
				}
			}
		},


		// *----------------------- M e t h o d s -----------------------------------------------------
		methods: {
			resetSearch() {
				const i = this.options.map(e => {
					return e.value
				}).indexOf(this.content);
				if (i !== -1) {
					this.search_content = this.options[i].label || this.options[i].value
					this.setNativeInputValue()
				}
			},
			handleButtonClick() {
				this.setDropdownPostion();
				this.visible ? this.$refs.input.blur() : this.$refs.input.focus();
			},
			handleOptionClick(item) {
				this.content = item.value
				this.search_content = item.label;
				this.$emit('input', item.value);
				this.setNativeInputValue();
				this.error = this.required && !this.content;
			},
			async handleChange() {
				this.hovered_option = 0;
				this.search_results = [];
				if (this.lazyload) {
					this.search_results = await this.lazyload(this.search_content)
				} else {
					this.defaultSearchFunction()
				}
				this.setDropdownPostion()
				this.visible = true;
			},
			defaultSearchFunction() {
				this.search_results = this.options.filter(this.searchFilter)
			},
			searchFilter(item) {
				const value_contains = (item.value+'').includes(this.search_content);
				const label_contains = (item.label+'').includes(this.search_content);
				return (value_contains || label_contains)
			},
			handleFocus() {
				this.setDropdownPostion()
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
			selectByKeboard() {
				if (this.search_results.length >= this.hovered_option) this.handleOptionClick(this.search_results[this
					.hovered_option])
				this.visible = false;
			},
			nextOption() {
				this.hovered_option++;
				if (this.hovered_option >= this.search_results.length) this.hovered_option = 0;
				if (this.search_results.length > 0) this.visible = true;
			},
			prevOption() {
				this.hovered_option--;
				if (this.hovered_option < 0) this.hovered_option = 0;
				if (this.search_results.length > 0) this.visible = true;
			},
			setNativeInputValue() {
				this.$refs.input.$refs.input.value = this.search_content || null;
			},
			setDropdownPostion () {
				const bounding = this.$refs.select;
				const dropdown_bounding = this.$refs.dropdown;
				if (typeof bounding == 'undefined' || typeof dropdown_bounding == 'undefined') return;
				const dropdown_height = dropdown_bounding.clientHeight;
				const height = window.innerHeight || document.documentElement.clientHeight;
				let top = bounding.getBoundingClientRect().top;
				const bottom = bounding.getBoundingClientRect().bottom;
				let right = bounding.getBoundingClientRect().right;
				let left = bounding.getBoundingClientRect().left;
				if (top>0.7*height) top = top-dropdown_height;
				else top = bottom+4;
				top<0?top=0:top>height?top=height-dropdown_height:top;
				left<0?left=0:left='auto';
				right<0?right=0:right='auto';
				this.dropdown_position  = {top: top+'px', right: right+'px', left: left+'px'}
			},
			handlePageScroll() {
				this.setDropdownPostion()
			},
			handleDelete (item, index) {
				this.$emit('delete', {item, index})
			},
			handleCreateNew() {
				this.$emit('create', this.search_content);
				let option = {value: this.search_content, label: this.search_content, isOption: true}
				this.options.push(option);
				this.handleOptionClick(option)
				this.search_content = '';
				this.handleChange()
			}
		},

		async mounted() {
			this.options = this.$children.filter(option => option.isOption);
			this.content = this.value;
			if (this.lazyload) {
				this.search_results = await this.lazyload(this.search_content)
			} else {
				this.defaultSearchFunction()
			}
			this.resetSearch();
			window.addEventListener('scroll', this.handlePageScroll);
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.handlePageScroll)
		}
	}
</script>