<template>
    <label :class="classObject">
        <span class="ty-switch__label" v-if="shouldShowLabel">
            <span v-if="label" v-text="label"></span>
            <span v-if="!label && value" v-text="textEnabled"></span>
            <span v-if="!label && !value" v-text="textDisabled"></span>
        </span>

        <input type="checkbox" :disabled="disabled" @change="trigger" :checked="value">

        <div :style="{width}"></div>
    </label>
</template>

<script>
export default {
    name: 'TySwitch',
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
        label: {
            default: ''
        },
        activeText: {
            default: ''
        },
        inactiveText: {
            default: ''
        },
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
			default: '40px'
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
                'ty-switch' : true,
                ['ty-switch--unchecked'] : !value,
                ['ty-switch--disabled'] : disabled,
                ['ty-switch--bold']: typeBold,
                ['ty-switch--bold--unchecked']: typeBold && !value,
                [`ty-switch-theme--${theme}`] : color,
                [`ty-switch-active-color--${activeColor}`] : activeColor,
                [`ty-switch-inactive-color--${inactiveColor}`] : inactiveColor,
                [`ty-switch-inactive-type--${inactiveColor}`] : inactiveColor,
            };
        },
        shouldShowLabel () {
            return this.label !== '' || this.textEnabled !== '' || this.textDisabled !== '';
        }
    }
}
</script>