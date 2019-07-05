import Fly from 'flyio';
import app from '../main.js';
import updateSession from '../api';

const fly = new Fly();
const that = this;
const localhost = 'http://127.0.0.1:2018';
const debughost = 'http://127.0.0.1:2019/api';
const producthost = 'https://system.lib.whu.edu.cn/mp/api';

// fly.config.baseURL = localhost;
fly.config.baseURL = producthost;
fly.config.timeout = 10000;
fly.config.headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json;charset=utf-8',
};
fly.interceptors.request.use((config) => {
  console.log(config);
  return config;
}, (err) => {
  wx.redirectTo({ url: '/pages/error?type=0' });
  // redirectTo
  return Promise.reject(err);
});

fly.interceptors.response.use(
  (response) => {
    if (response.data.session !== undefined) {
      app.$store.dispatch('setSession', response.data.session);
      wx.setStorageSync('session', response.data.session);
    }
    if (response.session !== undefined) {
      app.$store.dispatch('setSession', response.session);
      wx.setStorageSync('session', response.session);
    }
    if (response.data.status === 1) {
      wx.showToast({ title: '授权过期,请重新授权', icon: 'none' });
      const url = '/pages/login?type=login';
      wx.navigateTo({ url });
    }
    if (response.data.status === 6) {
      wx.showToast({ title: response.data.detail, icon: 'none' });
    }
    return response;
  },
  (err) => {
    wx.redirectTo({ url: '/pages/error?type=0' });
    return Promise.reject(err);
  },
);

export default fly;
