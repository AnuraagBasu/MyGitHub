import types from '../actions/types';

const initialState = {
  avatar: 'https://avatars0.githubusercontent.com/u/577342?v=4',
  name: '',
  handle: '',
  bio: '',
  userLocation: '',
  email: '',
  repoCount: 0,
  gistsCount: 0,
  isLoading: false,
  repos: [],
  accessToken: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_DETAILS:
      return Object.assign({}, state, action.userDetails);

    case types.SET_USER_ACCESS_TOKEN:
      return Object.assign({}, state, {
        accessToken: action.accessToken,
      });

    case types.SET_USER_REPOS:
      return Object.assign({}, state, { repos: state.repos.concat(action.repos) });

    case types.FETCH_IN_PROGRESS:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case types.FETCH_RESPONDED:
      return Object.assign({}, state, {
        isLoading: false,
      });

    case types.FETCH_RESPONDED_WITH_ERR:
      return Object.assign({}, state, {
        isLoading: false,
      });

    default:
      return state;
  }
};

export default {
  user,
};
