<template>
  <div>
    <table :class="['ty-table',striped?'ty-table-striped':'', divided?'ty-table-divided':'']">
      <slot/>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TyTable',
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

  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {
      columns: [],
		columnLabels: []
	}
  },

  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {},

  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  created() {
    this.$on('addColumn', this.addColumn)
  },
  mounted() {
	  // if (this.coloumns.length===0) {
		//   this.columnLabels=this.data.length>0?Object.keys(this.data[0]):[]
    // }
  },

  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {
    addColumn(col) {
      this.columns.push(col)
    }
  },

  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {}
}
</script>