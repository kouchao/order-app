export default {
  state: {
    title: '首页',
  },
  getters : {
    title: state => state.title,
  },
  actions: {
    setTitle ({ state, commit }, product) {
      commit('setTitle', product)

    }
  },
  mutations: {
    setTitle(state, value) {
      state.title = value
    },
  }

}
