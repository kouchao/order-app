export default {
  state: {
    activeTab: 'recommend',
    hideOrShowTabBar: true
  },
  actions: {
    setActiveTab ({ state, commit }, product) {
      commit('setActiveTab', product)
    },
    hideTabBar ({ state, commit }, product) {
      commit('hideTabBar')
    },
    showTabBar ({ state, commit }, product) {
      commit('showTabBar')
    }
  },
  mutations: {
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

}
