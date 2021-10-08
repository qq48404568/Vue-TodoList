// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// new Vue({
//   render:(createElement) => {
//     return createElement(App)
//   }
// }).$mount('#app')

new Vue({
  el:'#app',
  render: h => h(App),
  //全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  }
})