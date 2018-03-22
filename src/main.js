// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'

import store from './store'


import 'font-awesome/css/font-awesome.css'

Vue.prototype.$ajax = axios

Vue.prototype.$baseUrl = 'http://localhost:20001'
Vue.prototype.$imageUrl = 'http://yun.kouchao.top/毕业设计/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
