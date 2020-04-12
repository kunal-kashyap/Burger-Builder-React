import { actions } from './constants';

export const onLoaderShow = () => {
  return {
    type: actions.ON_LOADER_SHOW,
  };
};

export const onLoaderHide = () => {
  return {
    type: actions.ON_LOADER_HIDE,
  };
};
