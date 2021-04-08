<template>
  <div class="ty-card">
    <div v-if="hasHeaderSlot" class="ty-card__header">
      <slot name="header" />
    </div>
    <div class="ty-card__content p-3 p-sm-4">
      <slot />
    </div>
    <div v-if="hasFooterSlot" class="ty-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TyCard',

    // *----------------------- C o m p u t e d ---------------------------------------------------
    computed: {
      hasHeaderSlot() {
        return !!this.$slots['header']
      },
      hasFooterSlot() {
        return !!this.$slots['footer']
      },
    },
  }
</script>