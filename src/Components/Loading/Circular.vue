<template>
  <svg class="ty-circular-loading" viewBox ="25 25 50 50">
    <circle
      class ="circular__path"
      :style="{stroke:color}"
      cx ="50"
      cy ="50"
      r ="20"
      fill ="none"
    />
  </svg>
</template>

<script type="text/ecmascript-6">
export  default {
  name: 'Circular',
  props:{
    color:{
      type: String,
      default: '#409EFF',
    },
  },
}
</script>