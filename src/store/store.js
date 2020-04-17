import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('[Middleware] -> Dispatching', action);
      const result = next(action);
      console.log('[Middleware] -> Next State', store.getState());
      return result;
    };
  };
};
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
