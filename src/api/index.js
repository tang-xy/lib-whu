import request from './request';

export default function getTestData(params) {
  return new Promise((resolve, reject) => {
    request.get('/test', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}
