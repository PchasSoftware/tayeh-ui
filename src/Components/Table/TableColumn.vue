<template>
    <!-- Never render the contents -->
    <!-- The scoped slot won't have the required data -->
    <div v-if="false">
        <slot></slot>
    </div>
</template>

<script>
import settings from './settings';
export default {
  name: 'TyTableColumn',
  props: {
    label: {
      type: [String, Number],
      required: false,
    },
    prop: {
      type: [String, Number],
      required: false,
    },
    width: {
      type: String,
      default: 'auto'
    },
    minWidth: {
      type: String,
      default: 'auto'
    },
    maxWidth: {
      type: String,
      default: 'auto'
    },
    sortable: {
      type: [Boolean, String],
      default: false
    },
    dataType: { default: 'string', type: String },
    sortBy: { default: null },
    filterable: { default: false, type: Boolean },
    filterOn: { default: null },
    formatter: { default: v => v, type: Function },
    hidden: { default: false, type: Boolean },
    cellClass: { default: settings.cellClass },
    headerClass: { default: settings.headerClass },
    },
}
</script>