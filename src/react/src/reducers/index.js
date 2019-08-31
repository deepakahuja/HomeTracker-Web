import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import products from './sampleReducer';
import users from './adminReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  products,
  users,
  ajaxCallsInProgress
});

export default rootReducer;
