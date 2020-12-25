<template>
  <transition name="ty-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="v-loading-mask"
     :style="{backgroundColor:background ||  '' }"
     :class="[customClass, { ' is-fullscreen ':fullscreen }]">
      <div class="v-loading-spinner" :style="{color:color ||  'inherit' }">
        <circular  v-if="!spinner" :color="color"></circular>
        <i v-else :class="spinner"></i>
        <p v-if="text" class="ty-loading-text" :style="{color:color}">
          {{ text }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import  circular  from "./Circular.vue";
export  default {
  components:{
    circular
  },
  data () {
    return {
      text: null ,
      spinner: null ,
      background: null ,
      fullscreen: false ,
      visible: false ,
      customClass:"",
      color:"#409EFF"
    };
  },
  methods:{
    handleAfterLeave () {
      this . $emit ("after-leave");
    },
    setText ( text ) {
      this . text =text;
    }
  }
};
</script>