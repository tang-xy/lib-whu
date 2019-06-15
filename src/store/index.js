// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue';
import Vuex from 'vuex';
import { vertifySession, updateSession, bindLib, vertifyLibAccount, login, unbindLib } from '../api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    session: '',
    login: false,
    libBind: false,
    userInfo: {},
    libUser: {},
    searchHistory: [],
  },
  getters: {
    getSession(state) {
      return state.session;
    },
    getsearchHistory(state) {
      return state.searchHistory;
    },
    getLogin(state) {
      return state.login;
    },
    getLibBind(state) {
      return state.libBind;
    },
    getLibUser(state) {
      return state.libUser;
    },
  },
  actions: {
    setSession({ commit, state }, session) {
      commit('setSession', session);
      console.log('session');
      console.log(session);
    },
    vertifyLogin({ commit, state }, par) {
      // eslint-disable-next-line prefer-destructuring
      const session = par.ses;
      commit('setLibUser', par.user);
      wx.setStorageSync('session', session);
      if (session === '') {
        wx.navigateTo({ url: '/pages/login?type=login' });
        console.log('s = null');
        return;
      }
      vertifySession({ session }).then((response) => {
        console.log(par.user);
        console.log(response);
        if (!response.login) {
          wx.navigateTo({ url: '/pages/login?type=login' });
          return;
        }
        wx.checkSession({
          success() {
            commit('setLogin', true);
          },
          fail() {
            wx.login({
              success(res) {
                updateSession({ code: res.code, session }).then((r) => {
                  if (r.status === 0) {
                    commit('setLogin', true);
                  }
                });
              },
            });
          },
        });
        commit('setLibBind', response.libBind);
        commit('setSession', response.session);
      }).catch(() => {
        wx.navigateTo({ url: '/pages/error?type=0' });
      });
    },
    wechatLogin({ commit, state }, params) {
      login({
        code: params.code,
        nickName: params.userInfo.nickName,
        avatarUrl: params.userInfo.avatarUrl,
        gender: params.userInfo.gender,
        province: params.userInfo.province,
        city: params.userInfo.city,
        country: params.userInfo.country,
      }).then((response) => {
        console.log(response);
        commit('setSession', response.session);
        commit('setLogin', true);
        commit('setLibBind', response.libBind);
        wx.hideLoading();
        if (response.libBind) {
          wx.navigateBack({ delta: 1 });
        }
      });
    },
    unbindLibAccount({ commit, state }, info) {
      unbindLib(info).then((response) => {
        if (response.status === 0) {
          commit('setLibBind', false);
          wx.navigateTo({ url: 'info' });
        }
      }).catch(() => {
        wx.showToast({ title: '网络异常', icon: 'none' });
      });
    },
    bindLibAccount({ commit, state }, info) {
      const { session } = state;
      vertifyLibAccount(info).then((response) => {
        console.log(response);
        if (response.status === 0) {
          commit('setLibUser', response.user);
          console.log(1);
          wx.setStorageSync('libUser', response.user);
          bindLib({ session: response.session, libId: info.libId }).then((r) => {
            console.log(r);
            wx.showToast({ title: '绑定成功', icon: 'success' });
            commit('setLibBind', true);
            wx.navigateBack({ delta: 1 });
          });
        } else {
          wx.showToast({ title: '学号/密码错误', icon: 'none' });
        }
      }).catch(() => {
        wx.showToast({ title: '学号/密码错误', icon: 'none' });
      });
    },
  },
  mutations: {
    setLibUser(state, libUser) {
      // eslint-disable-next-line no-param-reassign
      state.libUser = libUser;
    },
    setsearchHistory(state, searchHistory) {
      // eslint-disable-next-line no-param-reassign
      state.searchHistory = searchHistory;
    },
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
    setUserInfo(state, value) {
      // eslint-disable-next-line no-param-reassign
      state.userInfo = value;
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
