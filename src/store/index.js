// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue';
import Vuex from 'vuex';
import { vertifySession, updateSession, bindLib, vertifyLibAccount, login } from '../api';

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
      if (session === '') {
        wx.navigateTo({ url: '/pages/login?type=login' });
        return;
      }
      vertifySession({ session }).then((response) => {
        wx.checkSession({
          success() {
            commit('setLogin', response[0].login);
          },
          fail() {
            wx.login({
              success(res) {
                updateSession({ wxSessionKey: res.code }).then((r) => {
                  if (r.status === 0) {
                    commit('setLogin', true);
                  }
                });
              },
            });
          },
        });
        commit('setLibBind', response[0].libBind);
        commit('setSession', session);
      }).catch(() => {
        wx.navigateTo({ url: '/pages/error?type=0' });
      });
    },
    wechatLogin({ commit, state }, params) {
      login({
        code: params.code,
        userInfo: params.userInfo,
      }).then((response) => {
        commit('setSession', response[0].session);
        commit('setLogin', true);
        commit('setLibBind', response[0].libBind);
        wx.setStorageSync('session', response[0].session);
        wx.hideLoading();
      });
    },
    bindLibAccount({ commit, state }, un, pw) {
      const { session } = state;
      vertifyLibAccount({ libId: un, libPsw: pw }).then((response) => {
        if (response.status === 0) {
          bindLib({ session, libId: un });
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
