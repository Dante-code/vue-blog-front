import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import VueCookies from 'vue-cookies'
import axios from 'axios'
import Highlight from './settings/highlight';
import './assets/js/iconfont.js'
import './assets/css/iconfont.css'

Vue.prototype.$axios = axios
Vue.use(VueCookies)
Vue.use(Highlight)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
