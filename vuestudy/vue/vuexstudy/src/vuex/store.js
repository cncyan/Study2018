import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
  count:1
}

const motutions={
  add(state){
    state.count ++;
  },
  reduce(state){
    state.count --;
  }
}

export default new Vuex.store({
  state,
  motutions
})
