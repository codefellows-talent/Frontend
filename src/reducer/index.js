import {combineReducers} from 'redux';
// we'll drop this /route.js. It's just dummy data to get everything to laod
import profileReducer from './profile.js';

export default combineReducers({
  profiles: profileReducer,
  connect: connectReducer,
});
