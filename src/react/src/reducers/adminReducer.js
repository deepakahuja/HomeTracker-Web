import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authors(state = initialState, action) {
  switch (action.type) {
    case types.SEARCHED_USERS:
      return {
        ...state, users: action.payload
      };
    case types.CLEAN_STATE:
        return {
          ...state, users: initialState.users
        };
    default:
      return state;
  }
}