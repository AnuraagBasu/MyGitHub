const responseErrorHandler = (response) => {
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  return response.json();
};

const get = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url) // eslint-disable-line
      .then(responseErrorHandler)
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const post = (url, payload = {}, options = {}) => {
  const headerOptions = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      accept: 'application/json',
    },
  };

  return new Promise((resolve, reject) => {
    fetch(url, Object.assign({}, headerOptions, options)) // eslint-disable-line
      .then(responseErrorHandler)
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {
  get,
  post,
};
