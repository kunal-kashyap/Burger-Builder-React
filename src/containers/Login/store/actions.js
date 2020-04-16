import { actions } from './constants';
import axios from 'axios';
import {
  onLoaderHide,
  onLoaderShow,
} from '../../../components/UI/Loader/store/actions';
import { getAuthToken } from '../../../utils/constants';

export const onSubmitLogin = (params, isSignUp) => {
  let url = isSignUp
    ? 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXt_pKrtSTYkuFwxfTgG6q6kIUPBZTVIM'
    : 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXt_pKrtSTYkuFwxfTgG6q6kIUPBZTVIM';

  return (dispatch) => {
    dispatch(onLoaderShow());
    axios
      .post(url, params)
      .then((response) => {
        dispatch({
          type: isSignUp ? actions.ON_SUBMIT_SIGNUP : actions.ON_SUBMIT_LOGIN,
          resp: response.data,
        });
        localStorage.setItem('loginToken', response.data.idToken);
        dispatch(onLoaderHide());
      })
      .catch((err) => {
        dispatch(onLoaderHide());
        console.log('Error occurred while signing up a user: ', err);
      });
  };
};

export const onLogout = () => {
  return {
    type: actions.ON_LOGOUT,
  };
};

export const getAuthState = () => {
  return {
    type: actions.GET_AUTH_STATE,
    loggedInState: getAuthToken() != null,
  };
};
