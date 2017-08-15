import {combineReducers} from 'redux';
// we'll drop this /route.js. It's just dummy data to get everything to laod
import connectReducer from './connect.js';

export default combineReducers({
  connect: connectReducer,
});
