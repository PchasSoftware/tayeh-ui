<template>
    <th
        @click="clicked"
        :class="headerClass"
        role="columnheader"
        slot-scope="col"
        :aria-sort="ariaSort"
        :aria-disabled="ariaDisabled"
        v-if="this.isVisible"
        :style="{minWidth: column.minWidth, maxWidth: column.maxWidth,width: column.width}"
    >
        {{ label }}
    </th>
</template>

<script>
    import { classList } from '../../utils/helpers';

    export default {
        props: ['column', 'sort'],

        computed: {
            ariaDisabled() {
                if (! this.column.isSortable()) {
                    return 'true';
                }

                return false;
            },

            ariaSort() {
                if (! this.column.isSortable()) {
                    return false;
                }

                if (this.column.prop !== this.sort.fieldName) {
                    return 'none';
                }

                return this.sort.order === 'asc' ? 'ascending' : 'descending';
            },

            headerClass() {
                if (! this.column.isSortable()) {
                    return classList('ty-table__th', this.column.headerClass);
                }

                if (this.column.prop !== this.sort.fieldName) {
                    return classList('ty-table__th ty-table__th--sort', this.column.headerClass);
                }

                return classList(`ty-table__th ty-table__th--sort-${this.sort.order}`, this.column.headerClass);
            },

            isVisible() {
                return ! this.column.hidden;
            },

            label() {
                if (this.column.label === null) {
                    return this.column.prop;
                }

                return this.column.label;
            },
        },

        methods: {
            clicked() {
                if (this.column.isSortable()) {
                    this.$emit('click', this.column);
                }
            },
        },
    };
</script>
