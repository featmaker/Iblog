import Vue from 'vue'
import App from './App.vue'
import Iview from 'iview'
import VueRouter from 'vue-router'
import routes from './route/route'

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

Vue.use(Iview, {
  transfer: true,
  size: 'default'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
