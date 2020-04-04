import { actions } from './constants';

const initialState = {};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ORDER_A_BURGER:
      return {
        ...state,
        orderResponse: action.resp,
      };

    default:
      return state;
  }
};

export default orderReducer;
