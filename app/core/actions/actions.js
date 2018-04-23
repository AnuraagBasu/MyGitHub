import types from './types';

export const setUserDetails = (userDetails) => {
  return {
    type: types.SET_USER_DETAILS,
    userDetails,
  };
};

export const setUserRepos = (repos) => {
  return {
    type: types.SET_USER_REPOS,
    repos,
  };
};

export const setUserAccessToken = (accessToken) => {
  return {
    type: types.SET_USER_ACCESS_TOKEN,
    accessToken,
  };
};

export const markFetchInProgress = () => {
  return {
    type: types.FETCH_IN_PROGRESS,
  };
};

export const markFetchResponded = () => {
  return {
    type: types.FETCH_RESPONDED,
  };
};

export const markFetchRespondedWithErr = () => {
  return {
    type: types.markFetchRespondedWithErr,
  };
};
