import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/bootstrap-vue'

require('@/store/modules/auth/subscriber')

Vue.config.productionTip = false

store.dispatch('ATTEMPT', localStorage.getItem('token'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
