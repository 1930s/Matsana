/*jshint esversion: 6 */
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const sessionReducer = (oldState = {userId: null}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {userId: action.currentUser.id};
    case LOGOUT_CURRENT_USER:
      return {userId: null};
    default:
      return oldState;
  }
};

export default sessionReducer;
