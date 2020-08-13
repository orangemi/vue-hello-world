import Vue from 'vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import App from './views/App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: createElement => createElement(App)
}).$mount('#app')
