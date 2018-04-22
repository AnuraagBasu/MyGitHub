import types from './types';
import request from '../lib/request';
import Utils from '../lib/utils';
import URLs from '../config/urls';

const setUserDetails = (userDetails) => {
  return {
    type: types.SET_USER_DETAILS,
    userDetails,
  };
};

const setUserRepos = (repos) => {
  return {
    type: types.SET_USER_REPOS,
    repos,
  };
};

const setUserAccessToken = (accessToken) => {
  return {
    type: types.SET_USER_ACCESS_TOKEN,
    accessToken,
  };
};

const markFetchInProgress = () => {
  return {
    type: types.FETCH_IN_PROGRESS,
  };
};

const markFetchResponded = () => {
  return {
    type: types.FETCH_RESPONDED,
  };
};

const markFetchRespondedWithErr = () => {
  return {
    type: types.markFetchRespondedWithErr,
  };
};

const getUserDetails = () => (dispatch, getState) => {
  dispatch(markFetchInProgress());

  request
    .get(URLs.authenticatedUser.details(getState().accessToken))
    .then((resp) => {
      dispatch(setUserDetails(Utils.getCleanUserDetails(resp)));

      dispatch(markFetchResponded());
    })
    .catch((err) => {
      console.error('error in fetching user details: ', err);
      dispatch(markFetchRespondedWithErr());
    });
};

const getUserRepos = () => (dispatch, getState) => {
  dispatch(markFetchInProgress());

  request
    .get(URLs.authenticatedUser.repos(getState().accessToken))
    .then((resp) => {
      dispatch(setUserRepos(Utils.getCleanRepos(resp)));

      dispatch(markFetchResponded());
    })
    .catch((err) => {
      console.error('error in fetching user details: ', err);
      dispatch(markFetchRespondedWithErr());
    });
};

const getUserAccessToken = (authCode) => {
  return (dispatch) => {
    request
      .post(URLs.getAccessToken(authCode))
      .then((resp) => {
        if (resp.error) {
          throw new Error(resp.error);
        } else {
          dispatch(setUserAccessToken(resp.access_token));
        }
      })
      .catch((err) => {
        console.error('error in fetching user access token: ', err);
      });
  };
};

export default {
  getUserDetails,
  getUserRepos,
  getUserAccessToken,
};
