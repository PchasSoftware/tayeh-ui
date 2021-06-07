<template>
  <div class="ty-color-circle" @keydown.enter="editing=false">
	  <div @click="handleClick" ref="colorCircle" :style="{width: size, height: size, background: color}" class="cricle"/>
	  <div v-if="show_picker" class="ty-color-picker-fixed">
		  <ty-color-picker ref="pickerBounding" v-model="color" @change="handleChange"/>
	  </div>
	  <!-- <ty-modal v-if="show_picker" >
		  <ty-color-picker ref="pickerBounding" v-model="color" @change="handleChange"/>
	  </ty-modal> -->
  </div>
</template>

<script>
export default {
	name: 'ty-color-circle',
	props: {
		value: {
			type: String,
		},
		editable: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: '32px'
		}
	},
	data() {
		return {
			color: '#159',
			editing: false,
			color_picker_position: {
				top: 'auto',
				left: 'auto',
				right: 'auto',
				bottom: 'auto'
			}
		}
	},
	computed: {
		show_picker () {
			return this.editable&&this.editing;
		}
	},
	methods: {
		// setColorPickerPosition () {
		// 		const bounding = this.$refs.colorCircle;
		// 		const pickerBounding = this.$refs.colorCircle;
		// 		if (typeof bounding == 'undefined' || typeof pickerBounding == 'undefined') return;
		// 		const picker_height = pickerBounding.clientHeight;
		// 		const height = window.innerHeight || document.documentElement.clientHeight;
		// 		let top = bounding.getBoundingClientRect().top+16;
		// 		const bottom = bounding.getBoundingClientRect().bottom;
		// 		let right = bounding.getBoundingClientRect().right-16;
		// 		let left = bounding.getBoundingClientRect().left+16;
		// 		if (top>0.7*height) top = top-picker_height;
		// 		else top = bottom+4;
		// 		top<0?top=0:top>height?top=height-picker_height:top;
		// 		left<0?left=0:left='auto';
		// 		right<0?right=0:right='auto';
		// 		this.color_picker_position  = {top: top+'px', right: right+'px', left: left+'px'}
		// 	},
		// handlePageScroll() {
		// 	this.setColorPickerPosition()
		// },
		handleChange () {
			this.$emit('input', this.color)
			this.$emit('change', this.color)
		},
		handleClick () {
			if (!this.editing) {
				this.editing = true;
				window.addEventListener('keydown', this.handleKeydown);
			} else {
				this.editing = false;
				window.removeEventListener('keydown', this.handleKeydown);
			}
		},
		handleKeydown (event) {
			if (event.key == 'Enter' || event.key === 'Escape') {
				window.removeEventListener('keydown', this.handleKeydown)
				this.editing = false;
			}
		}
	},
	mounted() {
		this.color = this.value
		// window.addEventListener('scroll', this.handlePageScroll);
		// this.handlePageScroll()
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handlePageScroll)
	}
}
</script>