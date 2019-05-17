import Fly from 'flyio';

const fly = new Fly();

fly.config.baseURL = 'http://127.0.0.1:2019';
fly.config.timeout = 10000;
fly.config.headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json;charset=utf-8',
};
fly.interceptors.request.use((error) => {
  Promise.reject(error);
});

fly.interceptors.response.use(
  response => response,
  err => Promise.reject(err),
);

export default fly;
