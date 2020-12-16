<template>
  <footer class="ty-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'TyFooter',

    componentName: 'TyFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
