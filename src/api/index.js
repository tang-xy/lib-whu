import request from './request';

export function vertifySession(params) {
  console.log(params);
  return new Promise((resolve, reject) => {
    console.log(request);
    request.get('/user/vertify_session/', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function updateSession(params) {
  console.log(params);
  return new Promise((resolve, reject) => {
    request.get('/user/update_session/', params)
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
    request.get('/libuser/login/', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function reserveBook(params) {
  console.log(params);
  return new Promise((resolve, reject) => {
    request.get('/libuser/hold_req/', params)
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
    request.get('/user/login/', params)
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
    request.get('/user/bind_lib/', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function unbindLib(params) {
  return new Promise((resolve, reject) => {
    request.get('/user/unbind_lib/', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function findLib(params) {
  return new Promise((resolve, reject) => {
    request.get('/libuser/find/', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}


export function searchLib(params) {
  return new Promise((resolve, reject) => {
    request.get('/libuser/present/', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function getRank(params) {
  return new Promise((resolve, reject) => {
    request.get('/libuser/rank/', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function getNotice(params) {
  return new Promise((resolve, reject) => {
    request.get('/libuser/notice/', params)
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function getBorrowInfo(params) {
  return new Promise((resolve, reject) => {
    request.get('/libuser/borrow_info/', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function getLoanInfo(params) {
  return new Promise((resolve, reject) => {
    request.get('/libuser/hold_info/', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function getLoanHistory(params) {
  return new Promise((resolve, reject) => {
    request.get('/libuser/loan_history/', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function holdReqCancel(params) {
  return new Promise((resolve, reject) => {
    request.get('/libuser/hold_req_cancel/', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function borrowRenew(params) {
  return new Promise((resolve, reject) => {
    request.get('/libuser/renew/', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

export function getBookDetail(params) {
  return new Promise((resolve, reject) => {
    request.get('/libuser/book_detail/', params)
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
    request.get('/test/', params)
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
}

