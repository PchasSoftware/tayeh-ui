<template>
	<div>
        <slot />
	</div>
</template>

<script>
    export default {
        name: 'TyOption',
        props: {
            label: { required: false },
            value: { required: true },
            prefix: { default: '' },
            suffix: { default: '' },
            disabled:{
				default: false
			},
        },
        data: () => ({
            isActive: false,
            isVisible: true,
            isOption: true,
        }),
        computed: {
            OptionLabel() {
                return this.label||this.value;
            }
        },
    };
</script>