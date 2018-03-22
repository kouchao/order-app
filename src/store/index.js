/**
 *  kouchao 创建于 2017/12/21
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '首页',
    activeTab: 'recommend',
    hideOrShowTabBar: true
  },
  mutations: {
    setTitle(state, value) {
      state.title = value
    },
    setActiveTab(state, value) {
      state.activeTab = value
    },
    hideTabBar(state){
      state.hideOrShowTabBar = false
    },
    showTabBar(state){
      state.hideOrShowTabBar = true
    }
  }
})
