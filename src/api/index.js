import request from './request';

export function vertifySession(params) {
  console.log(params);
  return new Promise((resolve, reject) => {
    request.get('/vertify', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function vertifyLibAccount(params) {
  console.log(params);
  return new Promise((resolve, reject) => {
    request.get('/libvertify', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function login(params) {
  return new Promise((resolve, reject) => {
    request.get('/login', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function bindLib(params) {
  return new Promise((resolve, reject) => {
    request.post('/account', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function getTestData(params) {
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

