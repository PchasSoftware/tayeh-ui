<template>
	<div :class="['ty-select', size, disabled?'disabled':'']" ref="selectContainer" id="container" itemid="div" :tabindex="disabled?'':'-1'" :role="disabled?'':'button'" :disabled="disabled" @focus="visible=true;setDropdownPostion" @blur="visible=false">
		<div class="ty-select__search" ref="select">
			<ty-input v-if="searchable&&!editing" ref="input" id="input-1" :disabled="disabled" v-model="search_content" :label="label" :required="required"
				:dir="dir" :size="size" :placeholder="placeholder" @focus="visible=true;setDropdownPostion" @blur="visible=false"
				@keydown.down.stop="nextOption" @keydown.up.stop="prevOption" @keydown.enter="selectByKeboard"
				@keydown.esc.stop="handleClose" @keydown.tab="nextOption" @input="handleChange">
				<div slot="suffix" @mousedown="handleButtonClick"  itemid="div" tabindex="-1">
					<i class="dropdown-icon ty-icon ty-icon-small ty-color-dark" />
					<i v-if="content&&showCancel" class="ml-1 ty-icon ty-icon-small ty-color-dark ty-icon-close" @mousedown.stop="clear"/>
				</div>
			</ty-input>
			<div v-else-if="editing">
				<ty-input placeholder="ویرایش" v-model="edited" ref="input" id="input-2"
				@keydown.enter="handleEdit"
				@keydown.esc.stop.prevent="editing=false">
					<ty-button @click="editing=false" size="small" color="info" slot="suffix">لغو</ty-button>
					<ty-button @click="handleEdit" size="small" slot="suffix">ذخیره</ty-button>
				</ty-input>
			</div>
			<ty-input v-else class="nocaret" ref="input" id="input-3" :disabled="disabled" :value="search_content" :label="label" :required="required"
				:dir="dir" :size="size" :placeholder="placeholder" @focus="visible=true;setDropdownPostion" @blur="visible=false"
				@keydown.down.stop="nextOption" @keydown.up.stop="prevOption" @keydown.enter="selectByKeboard"
				@keydown.esc.stop="handleClose" @keydown.tab="nextOption" @input="handleChange">
				<div class="dropdown-button" slot="suffix" @mousedown="handleButtonClick"  itemid="div" tabindex="-1">
					<i class="ty-icon ty-icon-small ty-color-dark dropdown-icon" />
					<i v-if="content&&showCancel" class="ml-1 ty-icon ty-icon-small ty-color-dark ty-icon-close" @mousedown.stop="clear"/>
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
		<div class="ty-select__dropdown" v-if="search_results&&search_results.length>0" :style="dropdown_position" ref="dropdown">
			<div  @mousedown="handleCreateNew" v-if="show_new" class="ty-dropdown-item ty-flex ty-space-between ty-dropdown-item-new">
				{{search_content}} <i class="ty-icon ty-icon-plus my-auto ty-color-gray"/>
			</div>
			<div @mousedown.prevent.stop="handleOptionClick(item)" @contextmenu.prevent.stop="disableBlur" v-for="(item, i) in search_results" :key="i" :ref="'option'+i" class="ty-dropdown-item ty-flex ty-space-between"
				:class="{'ty-dropdown-item-hovered': hovered_option==i}">
				{{item.label||item.value||item.name}}
				<span>
					<!-- <div @mousedown="makeEditable(item)"><i class="ty-icon ty-icon-delete"/></div> -->
				<ty-button style="z-index: 100;" height="24px" color="primary" v-if="showEdit" @mousedown="makeEditable(item)" size="small" icon="ty-icon-edit"/>
				<ty-button height="24px" color="danger" v-if="showDelete" @mousedown="handleDelete(item, i)" size="small" icon="ty-icon-delete"/>
				</span>
			</div>
		</div>
		<div v-else class="ty-select__dropdown" :style="dropdown_position" ref="dropdown">
			<slot name="empty-placeholder">
			<div class="fs-12 p-4">
				{{emptyPlaceholderText}}
			</div>
			</slot>
		</div>
		<div class="ty-destroy">
			<slot />
		</div>
	</div>
</template>

<script>
import Props from './props'
	export default {
		name: 'TySelect',
		// *----------------------- P r o p s ----------------------------------------------------------
		props: Props,

		computed: {
			show_new() {
				return this.searchable&&this.permitCreate&&!this.disabled&&this.search_content!==null&&(''+this.search_content).length>0&&this.options.findIndex(x => x.value === this.search_content)===-1
			},
			error() {
				return this.required&(this.content===null||(''+this.content).length===0)
			},
		},

		// *----------------------- D a t a -----------------------------------------------------------
		data() {
			const {
				select
			} = this;
			return {
				options: [],
				content: null,
				selected_option: null,
				edited: null,
				editing: false,
				search_content: '',
				search_results: [],
				visible: false,
				hovered_option: select?0:null,
				dropdown_position: {
					top: 'auto',
					left: 'auto',
					right: 'auto',
					bottom: 'auto'
				},
				mousedown: false
			}
		},


		// *----------------------- M e t h o d s -----------------------------------------------------
		methods: {
			disableBlur (event) {
				event.preventDefault()
			},
			resetSearch() {
				const i = this.options.map(e => {
					return e.value
				}).indexOf(this.content);
				if (i !== -1) {
					this.search_content = this.options[i].label || this.options[i].value
					this.setNativeInputValue()
				}
			},
			handleButtonClick(event) {
				if (event) event.preventDefault()
				this.setDropdownPostion();
				if (this.visible) {
					this.$refs.input.blur()
					this.$refs.selectContainer.blur()
				} else {
					this.$refs.input.focus()
				}
				// this.visible ? this.$refs.input.blur() : this.$refs.input.focus();
			},
			handleOptionClick(item) {
				this.content = item.value
				this.selected_option = item;
				this.search_content = item.label;
				this.$emit('input', item.value);
				this.$emit('change', item.value);
				this.setNativeInputValue();
				// this.visible = false;
				this.$refs.input.blur()
				this.$refs.selectContainer.blur()
				// this.visible ? this.$refs.input.blur() : this.$refs.input.focus();
			},
			clear () {
				this.content = null;
				this.selected_option = null;
				this.search_content = null;
				this.$emit('input', null);
				this.$emit('change', null);
				this.setNativeInputValue();
				// this.visible = false;
				this.$refs.input.blur()
				this.$refs.selectContainer.blur()
			},
			handleChange(value) {
				this.hovered_option = this.select?0:null;
				this.setDropdownPostion()
				if (!this.searchable) return;
				this.search_results = [];
				this.search()
				// this.visible = true;
			},
			async search () {
				if (this.lazyload) {
					this.search_results = await this.lazyload(this.search_content)
				} else {
					this.defaultSearchFunction()
				}
			},
			defaultSearchFunction() {
				this.search_results = this.options.filter(this.searchFilter)
			},
			searchFilter(item) {
				const value_contains = (item.value+'').includes(this.search_content);
				const label_contains = (item.label+'').includes(this.search_content);
				return (value_contains || label_contains)
			},
			// handleInputFocus(event) {
			// 	// console.log('input');
			// 	this.setDropdownPostion()
			// 	this.input_focused = true;
			// 	this.$emit('focus', event);
			// },
			// handleInputBlur(event) {
			// 	if (this.clearSearchOnBlur) {
			// 		this.resetSearch();
			// 	}
			// 	this.input_focused = false;
			// 	if (!this.input_focused&&!this.container_focused) this.$emit('blur', event)
			// },

			handleClose(event) {
				this.resetSearch();
				event.target.blur()
				// this.visible = false;
			},
			selectByKeboard() {
				if (this.search_results.length >= this.hovered_option) this.handleOptionClick(this.search_results[this
					.hovered_option])
				// this.visible = false;
			},
			nextOption(event) {
				if (event) event.preventDefault()
				this.hovered_option++;
				if (this.hovered_option >= this.search_results.length) this.hovered_option = 0;
				if (this.search_results.length > 0) this.$refs.input.focus()
				// this.$refs['option'+this.hovered_option].$el.focus();
				this.$refs.dropdown.scrollTop = this.hovered_option*43;
			},
			prevOption() {
				this.hovered_option--;
				if (this.hovered_option < 0) this.hovered_option = 0;
				if (this.search_results.length > 0) this.$refs.input.focus()
			},
			setNativeInputValue() {
				this.$refs.input.$refs.input.value = this.search_content || null;
			},
			setDropdownPostion () {
				const bounding = this.$refs.select;
				// const dropdown_bounding = this.$refs.dropdown;
				// if (typeof bounding == 'undefined' || typeof dropdown_bounding == 'undefined') return;
				// const dropdown_height = dropdown_bounding.clientHeight;
				const height = window.innerHeight || document.documentElement.clientHeight;
				let BoundingTop = bounding.getBoundingClientRect().top;
				const BoundingBottom = bounding.getBoundingClientRect().bottom;
				// let right = bounding.getBoundingClientRect().right;
				// let left = bounding.getBoundingClientRect().left;
				// if (top>0.5*height) top = top-dropdown_height;
				// else top = bottom-2;
				// top<0?top=0:top>height?top=height-dropdown_height:top;
				// left<0?left=0:left='auto';
				// right<0?right=0:right='auto';
				// this.dropdown_position  = {top: top+'px', right: right+'px', left: left+'px'}
				let top = 'auto';
				let bottom = 'auto';
				if (BoundingTop>0.5*height) bottom = -(BoundingTop-BoundingBottom+24)+'px'
				this.dropdown_position  = {top: top, bottom: bottom, right: 'audo', left: 'auto'}
			},
			handlePageScroll() {
				this.setDropdownPostion()
			},
			handleDelete (item, index) {
				this.$emit('delete', item.value)
				this.options.splice(index, 1);
				this.handleChange()
			},
			handleCreateNew() {
				this.$emit('create', this.search_content);
				let option = {value: this.search_content, label: this.search_content, isOption: true}
				this.options.push(option);
				this.handleOptionClick(option)
				this.search_content = '';
				// this.handleChange()
			},
			makeEditable (item) {
				// this.visible = false;
				this.selected_option = item;
				this.edited = item.value;
				this.editing = true;
				item.edit = true;
			},
			handleEdit () {
				this.$emit('edit', {oldValue: this.selected_option.value, newValue: this.edited})
				this.editing = false;
			},
			onMousedown() {
      		  this.mousedown = true
			},
			onMouseup () {
				this.mousedown = false;
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