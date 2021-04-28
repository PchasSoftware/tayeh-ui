<template>
<keep-alive>
    <section v-show="isActive"
             v-if="initialized"
             :aria-hidden="!isActive"
             class="tabs-component-panel"
             :id="id"
             role="tabpanel">
        <slot v-if="!disabled" />
    </section>
</keep-alive>
</template>

<script>
    export default {
        name: 'TyTab',
        props: {
            id: { required: true },
            name: { required: true },
            prefix: { default: '' },
            suffix: { default: '' },
            disabled:{ default: false },
            borderColor: {type: String, default: 'primary'},
        },
        data: () => ({
            isActive: false,
            isVisible: true,
            initialized: false,
        }),
        computed: {
            header() {
                return this.prefix + this.name + this.suffix;
            },
            hash() {
                if (this.disabled) {
                    return '#';
                }
                return '#' + this.id;
            },
        },
    };
</script>