import {createStore, applyMiddleware} from 'redux';
import thunk from './redux-thunk.js';
import reporter from './redux-reporter.js';

import reducer from '../reducer';

export default () => createStore(reducer, applyMiddleware(thunk, reporter));
