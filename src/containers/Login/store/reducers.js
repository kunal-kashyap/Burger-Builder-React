import { actions } from './constants';

const initialState = { isLoggedIn: false };
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ON_SUBMIT_LOGIN:
      return {
        ...state,
        loginAuth: action.resp,
        isLoggedIn: true,
      };
    case actions.ON_LOGOUT:
      return {
        ...state,
        loginAuth: null,
        isLoggedIn: false,
      };
    case actions.GET_AUTH_STATE:
      return {
        ...state,
        isLoggedIn: action.loggedInState,
      };

    default:
      return state;
  }
};

export default authReducer;
