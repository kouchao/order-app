/**
 *  kouchao 创建于 2017/12/21
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    shopCarList: []
  },
  mutations: {
    upDateShopCar (state, list) {
      state.shopCarList = list

    }
  }
})


export default store
