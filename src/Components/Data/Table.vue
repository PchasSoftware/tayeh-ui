<template>
  <div style="overflow: auto">
    <table :class="['ty-table',striped?'ty-table-striped':'ty-table-simple', divided?'ty-table-divided':'']">
      <ty-table-header :columns="columns">
      </ty-table-header>
      <ty-table-body :columns="columns" :rows="data">
        asfd
      </ty-table-body>
      <ty-table-footer>
        <slot name="footer"/>
      </ty-table-footer>
    </table>
    <div class="ty-destroy">
      <slot/>
    </div>
  </div>
</template>

<script>
import TableBodyVue from './TableBody.js';
import TableFooterVue from './TableFooter.js';
import TableHeaderVue from './TableHeader.js';
import TableRowVue from './TableRow.js';
export default {
  name: 'TyTable',
  components: {
    'ty-table-header': TableHeaderVue,
    'ty-table-body': TableBodyVue,
    'ty-table-row': TableRowVue,
    'ty-table-footer': TableFooterVue
  },
  // *----------------------- P r o p s ----------------------------------------------------------
  props: {
    data: {
      type: Array,
      default: () => []
    },
    headerCss: {
      type: String,
      required: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    divided: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      columns: []
    }
  },
  methods: {
    isItColumn (item) {
      return !!item.isColumn;
    }
  },
  mounted () {
    this.columns = this.$children.filter(this.isItColumn);
    console.log('table', this.columns);
  }
}
</script>