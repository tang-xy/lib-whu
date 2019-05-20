import Fly from 'flyio';

const fly = new Fly();

fly.config.baseURL = 'http://127.0.0.1:2019';
fly.config.timeout = 10000;
fly.config.headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json;charset=utf-8',
};
fly.interceptors.request.use(config => config, (err) => {
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
