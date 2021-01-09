<template>
    <section v-show="isActive"
             :aria-hidden="! isActive"
             class="tabs-component-panel"
             :id="id"
             role="tabpanel"
    >
        <slot v-if="visible" />
    </section>
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
            visible() {
                return !this.disabled&&this.isActive
            }
        },
    };
</script>