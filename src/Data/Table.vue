<template>
  <div>
    <table>
		<tr>
			<th v-for="item in columnLabels" :key="item">
				{{item}}
			</th>
		</tr>
		<tr v-for="(item, i) in data" :key="i">
			<th/>
		</tr>
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
	  coloumns: {
		  type: Array,
		  default: () => []
	  }
  },

  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {
		columnLabels: []
	}
  },

  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {},

  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  created() {},
  mounted() {
	  if (this.coloumns.length===0) {
		  this.columnLabels=this.data.length>0?Object.keys(this.data[0]):[]
	  }
  },

  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {},

  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {}
}
</script>