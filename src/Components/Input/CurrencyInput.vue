<template>
	<ty-input ref="input" :disabled="disabled" :label="label" @input="handleInput" @change="handleChange"
		@blur="handleBlur" @focus="handleFocus" :max="max" :min="min" :size="size" v-model="number"
		:placeholder="placeholder" :dir="dir" :required="required" :class="`${size}`">
		<div slot="suffix">
			<slot name="suffix" />
		</div>
		<div slot="prefix">
			<slot name="prefix" />
		</div>
	</ty-input>
</template>

<script>
	export default {
		name: 'TyCurrencyInput',
		// *----------------------- P r o p s ----------------------------------------------------------
		props: {
			value: {
				type: Number,
				default: 0
			},
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number
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
			required: {
				type: Boolean,
				default: false
			},
			dir: {
				type: String,
				default: 'rtl',
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},

		// *----------------------- D a t a -----------------------------------------------------------
		data() {
			const {
				value
			} = this;
			return {
				content: value,
				editing: false
			}
		},

		// *----------------------- C o m p u t e d ---------------------------------------------------
		computed: {
			number: {
				get: function () {
					return this.format(this.content)
				},
				set: function (v) {
					if (v == '') {
						this.content = 0;
					} else {
						this.content = parseInt(this.toEnNumber(v.replace(/,/g, '')));
					}
				}
			}
		},

		// *----------------------- L i f e   c i r c l e ---------------------------------------------
		//   created() {},

		// mounted() {
			// this.number = this.format(this.value);
			// this.content = this.value;
			// this.setNativeInputValue();
		// },

		// *----------------------- M e t h o d s -----------------------------------------------------
		methods: {
			handleChange() {
				if (this.min && this.content < this.min) this.content = this.min;
				if (this.max && this.content > this.max) this.content = this.max;
				this.$emit('change', parseInt(this.content));
			},
			handleInput(event) {
				this.content = event.replace(/[^0-9.]/g, "");
				this.$emit('input', parseInt(this.content));
			},
			handleFocus(event) {
				this.$emit('focus', event);
			},
			handleBlur(event) {
				this.$emit('blur', event);
			},
			format(valString) {
				if (!valString) {
					return '';
				}
				let val = valString.toString();
				return val.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
			},
			toEnNumber(val) {
				if (val == undefined) return '';
				val = ('' + val).trim();
				if (val == "") return "";
				val = val.replace(/۰/g, '0');
				val = val.replace(/۱/g, '1');
				val = val.replace(/۲/g, '2');
				val = val.replace(/۳/g, '3');
				val = val.replace(/۴/g, '4');
				val = val.replace(/۵/g, '5');
				val = val.replace(/۶/g, '6');
				val = val.replace(/۷/g, '7');
				val = val.replace(/۸/g, '8');
				val = val.replace(/۹/g, '9');
				val = val.replace(/\D/g, '');
				return val;
			},
			setNativeInputValue() {
				this.$refs.input.value = this.number || null;
			}
		},
		watch: {
			value() {
				this.content = this.value;
			}
		}
	}
</script>