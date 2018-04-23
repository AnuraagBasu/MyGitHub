import types from '../actions/types';

const initialState = {
  items: [],
  isLoading: false,
  currentPage: 0,
  hasAll: false,
};

const repos = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_REPOS: {
      let hasAllItems = false;
      if (!action.repos.length) {
        hasAllItems = true;
      }
      return Object.assign({}, state, {
        items: state.items.concat(action.repos),
        currentPage: state.currentPage + 1,
        hasAll: hasAllItems,
      });
    }

    case types.FETCH_IN_PROGRESS:
      return Object.assign({}, state, { isLoading: true });

    case types.FETCH_RESPONDED:
      return Object.assign({}, state, { isLoading: false });

    case types.FETCH_RESPONDED_WITH_ERR:
      return Object.assign({}, state, { isLoading: false });

    default:
      return state;
  }
};

export default {
  repos,
};
