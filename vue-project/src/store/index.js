import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    num:2,
  },
  getters:{
    result(state){
      return state.num*state.count

    }

  },
  mutations: {
    add(state){
      state.count++;
    },
    addNum(state,num){
      state.count+=num;

    },
    reduce(state){
      state.count--;
    }
  },
  actions: {
    reduceFun(){
      setTimeout(() => {
        console.log();
        this.commit('reduce')
        
      }, 1000);
    }
  },
  modules: {
  }
})
