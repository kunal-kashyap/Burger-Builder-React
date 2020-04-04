import { combineReducers } from 'redux';

import burgerBuilderReducer from '../containers/BurgerBuilder/store/reducers';
import ordersReducer from '../containers/Orders/store/reducers';
import orderReducer from '../containers/Checkout/store/reducers';

const initialState = {};

let rootReducer = combineReducers({
  initialState,
  burgerBuilder: burgerBuilderReducer,
  orders: ordersReducer,
  order: orderReducer,
});

export default rootReducer;
