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

      let shopCarList = Array.from(new Map([...state.shopCarList, ...list].map(x => [x.id, x])).values())
      state.shopCarList = shopCarList.filter(o => o.count > 0)
      console.log(state.shopCarList)
    }
  }
})


export default store
