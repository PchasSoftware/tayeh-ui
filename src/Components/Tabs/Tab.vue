<template>
<keep-alive>
    <section v-show="isActive"
             :aria-hidden="! isActive"
             class="tabs-component-panel"
             :id="id"
             role="tabpanel"
    >
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
        },
        data: () => ({
            isActive: false,
            isVisible: true,
            isLoaded: false
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