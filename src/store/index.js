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
        commit('setSession', session);
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
        wx.setStorageSync('session', response.session);
        wx.hideLoading();
        wx.navigateBack({ delta: 1 });
      });
    },
    bindLibAccount({ commit, state }, info) {
      const { session } = state;
      console.log(info);
      vertifyLibAccount(info).then((response) => {
        if (response.status === 0) {
          console.log(response);
          bindLib({ session, libId: info.libId }).then((r) => {
            wx.showToast({ title: '绑定成功', icon: 'success' });
            commit('setLibBind', true);
            commit('setUserInfo', response.user);
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
