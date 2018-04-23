import request from '../lib/request';
import Utils from '../lib/utils';
import URLs from '../config/urls';

import {
  markFetchInProgress,
  markFetchResponded,
  markFetchRespondedWithErr,
  setUserDetails,
  setUserAccessToken,
  markAuthenticationFailed,
} from './actions';

const getUserDetails = () => (dispatch, getState) => {
  dispatch(markFetchInProgress());

  request
    .get(URLs.authenticatedUser.details(getState().user.accessToken))
    .then((resp) => {
      dispatch(setUserDetails(Utils.getCleanUserDetails(resp)));

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
          const error = new Error(resp.error_description);
          error.code = resp.error;
          throw error;
        } else {
          dispatch(setUserAccessToken(resp.access_token));
        }
      })
      .catch((err) => {
        console.error('error in fetching user access token: ', err);
        dispatch(markAuthenticationFailed(err.code));
      });
  };
};

export default {
  getUserDetails,
  getUserAccessToken,
};
