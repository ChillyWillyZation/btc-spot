import { combineReducers } from 'redux';
import counter from './counter';
import horseraces from './horseraces';
import user from './user';

export default combineReducers({
  counter,
  horseraces,
  user
});
