import { actions } from './constants';

const initialState = {};
const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ON_LOADER_SHOW:
      return {
        ...state,
        showLoader: true,
      };

    case actions.ON_LOADER_HIDE:
      return {
        ...state,
        showLoader: false,
      };

    default:
      return state;
  }
};

export default loaderReducer;
