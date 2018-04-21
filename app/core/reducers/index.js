import { combineReducers } from 'redux';
import reducers from './reducers';

export default combineReducers(Object.assign({}, reducers));
