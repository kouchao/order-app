// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'

import VueSocketio from 'vue-socket.io';

import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

import 'font-awesome/css/font-awesome.css'

const socketUrl = 'http://localhost:3000'

Vue.prototype.$ajax = axios

Vue.prototype.$baseUrl = 'http://localhost:20001'
Vue.prototype.$imageUrl = 'http://yun.kouchao.top/毕业设计/'

Vue.config.productionTip = false

Vue.use(YDUI);
Vue.use(VueSocketio, socketUrl);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
