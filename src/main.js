import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/vive.scss'
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css';
import {Pagination} from 'element-ui'
Vue.use(Pagination)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
