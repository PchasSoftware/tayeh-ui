<template>
  <aside class="ty-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'TyAside',

    componentName: 'TyAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
