import { combineReducers } from 'redux';
import UserReducer from './user';
import ReposReducer from './repos';

export default combineReducers(Object.assign({}, UserReducer, ReposReducer));
