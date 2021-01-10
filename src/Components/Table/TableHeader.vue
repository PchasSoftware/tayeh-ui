<template>
	<div class="ty-flex ty-space-between mb-1">
		<div class="ty-flex ty-flex-wrap">
			<h4 :class="['my-auto ml-2 pl-2 ty-border-left','ty-color-'+titleColor]">{{title}}</h4>
			<ty-input v-model="content" width="60%" @input="handleInput" @change="handleChange" v-if="showSearch" class="ty-color-border"
				icon="ty-icon-search" :clear="true" :placeholder="searchPlaceholder" />
		</div>
		<div class="ty-flex ty-flex-wrap">
			<div class="my-auto">
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TyTableHeader',
		props: {
			value: String,
			title: {
				type: String,
				default: 'جدول'
			},
			titleColor: {
				type: String,
				default: 'primary'
			},
			showSearch: {
				type: Boolean,
				default: true
			},
			searchPlaceholder: {
				type: String,
				default: 'جستجو ...'
			},
			onInput: Function,
			onChange: Function
		},
		data() {
			const {
				value
			} = this;
			return {
				content: value||null
			}
		},
		methods: {
			handleInput (e) {
				this.$emit('input', e);
				if (typeof this.onInput == 'function') this.onInput(e);
			},
			handleChange (e) {
				this.$emit('change', e);
				if (typeof this.onChange == 'function') this.onChange(e);
			}
		}
	}
</script>