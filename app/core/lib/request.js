/* eslint-disable */

export const makeRequest = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url) //eslint-disable-line
      .then((resp) => {
        if (!resp.ok) {
          const error = new Error(resp.statusText);
          error.response = resp;
          throw error;
        }

        return resp.json();
      })
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
