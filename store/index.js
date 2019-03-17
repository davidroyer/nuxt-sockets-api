/* eslint-disable no-console */
export const state = () => ({
  counter: 0,
  posts: []
})

export const mutations = {
  setPosts(state, data) {
    state.posts = data
  }
}

export const actions = {
  setPosts({ commit, state }, payload) {
    console.log('TCL: setPosts -> payload')
    commit('setPosts', payload)
  }
}
