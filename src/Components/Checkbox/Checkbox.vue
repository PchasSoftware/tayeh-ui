<template>
    <div :class="classObject" :style="{fontSize, fontWeight}">
		<span class="ty-flex" style="gap: 8px">
        <input type="checkbox" :disabled="disabled" @change="trigger" :checked="value">
		
        <div :style="{width, height: width}"></div>
		<label class="label" v-if="shouldShowLabel">
            <!-- <span v-if="!label && !disabled && value" v-text="activeText"></span>
            <span v-if="!label && !disabled && !value" v-text="inactiveText"></span>
            <span v-if="!label && disabled" v-text="disabledText"></span>
			<span v-if="label && !disabled" v-text="label"></span> -->
			<span v-text="currentLabel"></span>
        </label>
		</span>
    </div>
</template>

<script>
export default {
    name: 'TyCheckbox',
    props: {
        typeBold: {
            default: false
        },
        value: {
            default: false
		},
		activeValue: {
			default: true
		},
		inactiveValue: {
			default: false
		},
        disabled: {
            default: false
        },
        label: [String, Number],
        activeText: [String, Number],
        inactiveText: [String, Number],
        color: {
            default: 'primary'
		},
		activeColor: {
            default: 'primary'
		},
		inactiveColor: {
            default: 'gray'
        },
        theme: {
            default: 'default'
        },
        emitOnMount: {
            default: true
		},
		width: {
			type: [String, Number],
			default: '26px'
		},
		fontSize: {
			type: [String, Number],
			default: '16px'
		},
		fontWeight: {
			type: [String, Number],
			default: '500'
        },
        textEnabled: String,
        textDisabled: String,
    },
    mounted () {
        if(this.emitOnMount) {
            this.$emit('input', this.value)
        }
    },
    methods: {
        trigger (e) {
            this.$emit('input', e.target.checked?this.activeValue:this.inactiveValue)
        }
    },
    computed: {
        classObject () {
			const { activeColor, inactiveColor, color, value, theme, typeBold, disabled } = this;
            return {
				'ty-checkbox' : true,
                'ty-checkbox--unchecked' : !value,
                'ty-checkbox--disabled' : disabled,
                'ty-checkbox--bold': typeBold,
                'ty-checkbox--bold--unchecked': typeBold && !value,
                [`ty-checkbox-theme--${theme}`] : color,
                [`ty-checkbox-active-color--${activeColor}`] : activeColor,
                [`ty-checkbox-inactive-color--${inactiveColor}`] : inactiveColor,
                [`ty-checkbox-inactive-type--${inactiveColor}`] : inactiveColor,
            };
		},
		currentLabel () {
			if (this.disabled) return this.textDisabled||(this.value?this.activeText:this.inactiveText)||this.label;
            return this.value&&this.activeText?this.activeText:this.inactiveText?this.inactiveText:this.label;
		},
        shouldShowLabel () {
            return this.label !== '' || this.textEnabled !== '' || this.textDisabled !== '';
        }
    }
}
</script>