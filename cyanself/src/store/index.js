import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  activefoot:"home"
}
const mutations={
  changeFoot(state,activestate){
    state.activefoot=activestate
  }
}
const actions={
  changeFoot(ctx,activestate){
    ctx.commit('changeFoot',activestate)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
