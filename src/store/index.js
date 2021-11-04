import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    username: ''
  },
  mutations: {
    setUsers (state, payload) {
      state.users = payload
    },
    setUsername (state, payload) {
      state.username = payload
    },
  },
  actions: {
  },
  modules: {
    users (state) {
      return state.users
    }
  }
})
