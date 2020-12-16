import Vue from 'vue/dist/vue.esm'
import App from './App'
import TayehUi from '../src/index'

Vue.use(TayehUi)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
