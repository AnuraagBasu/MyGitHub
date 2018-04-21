import types from '../actions/types';

const initialState = {
  name: '',
  handle: '',
  bio: '',
  location: '',
  email: '',
  repoCount: 0,
  isLoading: false,
  repos: [],
};

const name = (state = initialState.name, action) => {
  switch (action.type) {
    case types.SET_USER_DETAILS:
      return action.userDetails.name;

    default:
      return state;
  }
};

const handle = (state = initialState.handle, action) => {
  switch (action.type) {
    case types.SET_USER_DETAILS:
      return action.userDetails.handle;

    default:
      return state;
  }
};

const bio = (state = initialState.bio, action) => {
  switch (action.type) {
    case types.SET_USER_DETAILS:
      return action.userDetails.bio;

    default:
      return state;
  }
};

const location = (state = initialState.location, action) => {
  switch (action.type) {
    case types.SET_USER_DETAILS:
      return action.userDetails.location;

    default:
      return state;
  }
};

const email = (state = initialState.email, action) => {
  switch (action.type) {
    case types.SET_USER_DETAILS:
      return action.userDetails.email;

    default:
      return state;
  }
};

const repoCount = (state = initialState.repoCount, action) => {
  switch (action.type) {
    case types.SET_USER_DETAILS:
      return action.userDetails.repoCount;

    default:
      return state;
  }
};

const isLoading = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case types.FETCH_IN_PROGRESS:
      return true;

    case types.FETCH_RESPONDED:
      return false;

    case types.FETCH_RESPONDED_WITH_ERR:
      return false;

    default:
      return state;
  }
};

const repos = (state = initialState.repos, action) => {
  switch (action.type) {
    case types.SET_USER_REPOS:
      return action.repos;

    default:
      return state;
  }
};

export default {
  name,
  handle,
  bio,
  location,
  email,
  repoCount,
  isLoading,
  repos,
};
