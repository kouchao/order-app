/**
 *  kouchao 创建于 2017/12/21
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: '推荐'
    },
    mutations: {
        setTitle: state => state.title
    }
})
