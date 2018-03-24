/**
 *  kouchao 创建于 2017/12/21
 */

import Vue from 'vue'
import Vuex from 'vuex'
import navBar from './modules/navBar'
import tabBar from './modules/tabBar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navBar,
    tabBar
  }
})
