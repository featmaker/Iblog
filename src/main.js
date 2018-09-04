import Vue from 'vue'
import App from './App.vue'
import Iview from 'iview'

Vue.config.productionTip = false

Vue.use(Iview, {
  transfer: true,
  size: 'default'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
