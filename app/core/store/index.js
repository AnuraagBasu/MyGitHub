import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from '../reducers';

const getStore = (initialState) => {
  const loggerMiddleware = createLogger({ predicate: () => process.env.NODE_ENV === 'development' });

  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));

  return createStore(reducer, initialState, enhancer);
};

const initialState = {};

export default getStore(initialState);
