import { actions } from './constants';

const initialState = {
  orders: [],
};
const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };

    default:
      return state;
  }
};

export default ordersReducer;
