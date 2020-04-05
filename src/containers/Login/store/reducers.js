import { actions } from './constants';

const initialState = {};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ON_SUBMIT_LOGIN:
      return {
        ...state,
        orderResponse: action.resp,
      };

    default:
      return state;
  }
};

export default orderReducer;
