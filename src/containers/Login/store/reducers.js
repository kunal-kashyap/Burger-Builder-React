import { actions } from './constants';

const initialState = {};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ON_SUBMIT_LOGIN:
      return {
        ...state,
        loginAuth: action.resp,
      };

    default:
      return state;
  }
};

export default authReducer;
