export const state = () => ({
  data_user: ''
})

export const getters = {
  userName (state) {
    return state.data_user.name
  }
}

export const mutations = {
  dataUser (state, res) {
    state.data_user = res
  }
}

export const actions = {
  DATA_USER ({ commit }, value) {
    commit('dataUser', value)
  }
}
