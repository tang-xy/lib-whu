// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue';
import Vuex from 'vuex';
import { vertifySession, bindLib, vertifyLibAccount, login } from '../api';

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
    getLogin(state) {
      return state.login;
    },
    getLibBind(state) {
      return state.libBind;
    },
  },
  actions: {
    setSession({ commit, state }, session) {
      commit('setSession', session);
      vertifySession({ session }).then((response) => {
        console.log(response);
        if (response.length === 0) {
          wx.navigateTo({ url: '/pages/login?type=login' });
        } else {
          commit('setLogin', response[0].login);
          commit('setLibBind', response[0].libBind);
        }
      }).catch(() => {
        wx.navigateTo({ url: '/pages/error?type=0' });
      });
    },
    wechatLogin({ commit, state }, params) {
      login({ id: 0 }).then((response) => {
        commit('setSession', response[0].session);
        commit('setLogin', response[0].login);
        commit('setLibBind', response[0].libBind);
        wx.setStorageSync('session', response[0].session);
        wx.hideLoading();
      });
    },
    bindLibAccount({ commit, state }, un, pw) {
      const { session } = state;
      vertifyLibAccount({ username: un, password: pw }).then((response) => {
        if (response[0].result === 1) {
          bindLib({ session, libun: un, linpw: pw });
          wx.showToast({ title: '绑定成功', icon: 'success' });
          commit('setLibBind', true);
        }
      }).catch(() => {
        wx.showToast({ title: '学号/密码错误', icon: 'none' });
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
