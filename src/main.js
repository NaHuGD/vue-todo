import Vue from 'vue'
import App from './App.vue'
// vuex
import store from './store/index';

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
