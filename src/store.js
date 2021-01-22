import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {
    EVENT_NAME() {
      console.log(1);
    },
  },
  actions: {
    EVENT_NAME() {
      console.log(2);
    },
  },
});
