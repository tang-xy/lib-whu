// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue';
import Vuex from 'vuex';
import { vertifySession } from '../api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    session: '',
    login: false,
    libBind: false,
    userInfo: {},
  },
  getters: {
    getSession(state) {
      return state.session;
    },
  },
  actions: {
    setSession({ commit, state }, session) {
      commit('setSession', session);
      vertifySession({ session }).then((response) => {
        if (response) {
          wx.navigateTo({ url: '/pages/login' });
        } else {
          commit('setLogin', response.data.login);
          commit('setLibBind', response.data.libBind);
        }
      }).catch(() => {
        wx.navigateTo({ url: '/pages/error?type=0' });
      });
    },
  },
  mutations: {
    setSession(state, session) {
      // eslint-disable-next-line no-param-reassign
      state.session = session;
    },
    setLogin(state, value) {
      // eslint-disable-next-line no-param-reassign
      state.login = value;
    },
    setLibBind(state, value) {
      // eslint-disable-next-line no-param-reassign
      state.libBind = value;
    },
    increment: (state) => {
      const obj = state;
      obj.count += 1;
    },
    decrement: (state) => {
      const obj = state;
      obj.count -= 1;
    },
  },
});

export default store;
