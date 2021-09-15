import Vue from 'vue';
import Vuex from 'vuex';

import post from './modules/post';

Vue.use(Vuex); // регистрация нового плагина Vuex

export default new Vuex.Store({
  actions: {},
  mutations: {},
  state: {},
  getters: {},

  modules: {
    post
  }
})