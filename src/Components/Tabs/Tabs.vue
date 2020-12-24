<template>
  <div :class="{
          'ty-tabs': true,
          'ty-tabs--card': type === 'card',
          [`ty-tabs--${tabPosition}`]: true,
          'ty-tabs--border-card': type === 'border-card'
        }">
    <div v-if="tabPosition !== 'bottom'">
      <div :class="['el-tabs__header', `is-${tabPosition}`]">
        {{newButton}}
        <tab-nav :current-name="currentName" @onTabClick="handleTabClick" @onTabRemove="handleTabRemove"
          :editable="editable" :type="type" :contents="contents" :stretch="stretch"></tab-nav>
      </div>
      <div class="el-tabs__content">
        <slot />
      </div>
    </div>
    <div v-else>
      <div class="el-tabs__content">
        <slot />
      </div>
      <div :class="['el-tabs__header', `is-${tabPosition}`]">
        {{newButton}}
        <tab-nav :current-name="currentName" @onTabClick="handleTabClick" @onTabRemove="handleTabRemove"
          :editable="editable" :type="type" :contents="contents" :stretch="stretch"></tab-nav>
      </div>
    </div>
  </div>
</template>

<script>
  import TabNav from './tab-nav.vue';
  export default {
    name: 'TyTabs',
    components: {
      TabNav
    },
    props: {
      type: String,
      activeName: String,
      closable: Boolean,
      addable: Boolean,
      value: {},
      editable: Boolean,
      tabPosition: {
        type: String,
        default: 'top'
      },
      beforeLeave: Function,
      stretch: Boolean
    },
    data() {
      return {
        contents: []
      }
    },
    provide() {
      return {
        rootTabs: this
      };
    },
    methods: {
      calcContentInstances(isForceUpdate = false) {
        if (this.$slots.default) {
          const contentSlots = this.$slots.default.filter(vnode => vnode.tag &&
            vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'TyTabContent');
          // update indeed
          const contents = contentSlots.map(({
            componentInstance
          }) => componentInstance);
          const contentsChanged = !(contents.length === this.contents.length && contents.every((content, index) =>
            content === this.contents[index]));
          if (isForceUpdate || contentsChanged) {
            this.contents = contents;
          }
        } else if (this.contents.length !== 0) {
          this.contents = [];
        }
      },
    },
    mounted() {
      this.calcContentInstances();
    },

    updated() {
      this.calcContentInstances();
    }
  }
</script>

<style>

</style>