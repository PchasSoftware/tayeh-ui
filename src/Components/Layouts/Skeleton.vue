<template>
  <section class="ty-skeleton" :style="{width, height}">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'TySkeleton',
    componentName: 'TySkeleton',
    props: {
      width: {
        type: [String, Number],
        default: '100%'
      },
      height: {
        type: [String, Number],
        default: '100%'
      }
    }
  };
</script>
