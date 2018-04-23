import request from '../lib/request';
import Utils from '../lib/utils';
import URLs from '../config/urls';

import { setUserRepos, markFetchInProgress, markFetchResponded, markFetchRespondedWithErr } from './actions';

const getUserRepos = () => (dispatch, getState) => {
  dispatch(markFetchInProgress());

  const pageNumberRequested = getState().repos.currentPage + 1;
  request
    .get(URLs.authenticatedUser.repos(getState().user.accessToken, pageNumberRequested))
    .then((resp) => {
      dispatch(setUserRepos(Utils.getCleanRepos(resp)));

      dispatch(markFetchResponded());
    })
    .catch((err) => {
      console.error('error in fetching user details: ', err);
      dispatch(markFetchRespondedWithErr());
    });
};

export default {
  getUserRepos,
};
