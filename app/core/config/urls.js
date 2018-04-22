import qs from 'qs';

import Constants from '../config/constants';

const authBaseURL = 'https://github.com/';
const apiBaseURL = 'https://api.github.com/';

const login = () => {
  const queryString = qs.stringify({
    client_id: Constants.gitHubClientId,
    scope: 'user,repo',
    redirect_uri: `${window.location.origin}/login/callback`, // eslint-disable-line no-undef
  });

  return `${authBaseURL}login/oauth/authorize?${queryString}`;
};

const getAccessToken = (authCode) => {
  const queryString = qs.stringify({
    client_id: 'b78fae18d14431bfaf74',
    client_secret: '7c5b0e17eec3c19b0dc01bcc6b5c8c762d28a08d',
    code: authCode,
  });

  return `${authBaseURL}login/oauth/access_token?${queryString}`;
};

const authenticatedUser = {
  details: (accessToken) => {
    const queryString = qs.stringify({
      access_token: accessToken,
    });

    return `${apiBaseURL}user?${queryString}`;
  },

  repos: (accessToken) => {
    const queryString = qs.stringify({
      access_token: accessToken,
    });

    return `${apiBaseURL}user/repos?${queryString}`;
  },
};

export default {
  login,
  getAccessToken,
  authenticatedUser,
};
