import types from './types';
import { makeRequest } from '../lib/request';
import Utils from '../lib/utils';

const setUserDetails = (userDetails) => {
  return {
    type: types.SET_USER_DETAILS,
    userDetails,
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

const getUserDetails = () => (dispatch) => {
  dispatch(markFetchInProgress());

  // TODO: change to use auth API
  // TODO: make enms for URLs
  makeRequest('https://api.github.com/users/chriscoyier')
    .then((resp) => {
      dispatch(setUserDetails(Utils.getCleanUserDetails(resp)));

      dispatch(markFetchResponded());
    })
    .catch((err) => {
      console.error('error in fetching user details: ', err);
      dispatch(markFetchRespondedWithErr());
    });
};

export default {
  getUserDetails,
};
