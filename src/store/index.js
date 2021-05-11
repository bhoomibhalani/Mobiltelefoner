import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// modules
import phone from '@/store/modules/phone';
const gettersObj = {}
const stateObj ={}
const actions = {}
const mutations = {}

export default new Vuex.Store({
  namespaced: true,
  state: stateObj,
  getters: gettersObj,
  actions,
  mutations,
  modules: {
    phone
  }
});