import Vue from "vue";
import Vuex from "vuex";
import student from './student.js'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headerName:""
  },
  mutations: {
    updateHeaderName:(state,data)=>{
      state.headerName = data
    }
  },
  actions: {

  },
  modules: {
    student
  }
});
