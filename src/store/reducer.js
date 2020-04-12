import { combineReducers } from 'redux';

import burgerBuilderReducer from '../containers/BurgerBuilder/store/reducers';
import ordersReducer from '../containers/Orders/store/reducers';
import orderReducer from '../containers/Checkout/store/reducers';
import authReducer from '../containers/Login/store/reducers';
import loaderReducer from '../components/UI/Loader/store/reducers';

const initialState = {};

let rootReducer = combineReducers({
  initialState,
  burgerBuilder: burgerBuilderReducer,
  orders: ordersReducer,
  order: orderReducer,
  auth: authReducer,
  loader: loaderReducer,
});

export default rootReducer;
