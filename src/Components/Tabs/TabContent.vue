<template>
  <div
    class="ty-tab-content"
    v-if="(!lazy || loaded) || active"
    v-show="active"
    role="tabcontentl"
    :aria-hidden="!active"
    :id="`content-${contentName}`"
    :aria-labelledby="`tab-${contentName}`"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'TyTabContent',

    props: {
      label: String,
      labelContent: Function,
      name: String,
      closable: Boolean,
      disabled: Boolean,
      lazy: Boolean
    },

    data() {
      return {
        index: null,
        loaded: false
      };
    },

    computed: {
      isClosable() {
        return this.closable || this.$parent.closable;
      },
      active() {
        const active = this.$parent.currentName === (this.name || this.index);
        if (active) {
          this.loaded = true;
        }
        return active;
      },
      contentName() {
        return this.name || this.index;
      }
    },

    updated() {
      this.$parent.$emit('tab-nav-update');
    }
  };
</script>
