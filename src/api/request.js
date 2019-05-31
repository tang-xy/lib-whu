import Fly from 'flyio';

const fly = new Fly();

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
  wx.navigateTo({ url: '/pages/error?type=0' });
  return Promise.reject(err);
});

fly.interceptors.response.use(
  response => response,
  (err) => {
    wx.navigateTo({ url: '/pages/error?type=0' });
    return Promise.reject(err);
  },
);

export default fly;
