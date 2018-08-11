import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import products from './sampleReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  products,
  ajaxCallsInProgress
});

export default rootReducer;
