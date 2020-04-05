import { actions } from './constants';
import axios from 'axios';

export const onSubmitLogin = (params, isSignUp) => {
  let url = isSignUp
    ? 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXt_pKrtSTYkuFwxfTgG6q6kIUPBZTVIM'
    : 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXt_pKrtSTYkuFwxfTgG6q6kIUPBZTVIM';

  return (dispatch) => {
    axios
      .post(url, params)
      .then((response) => {
        dispatch({
          type: isSignUp ? actions.ON_SUBMIT_SIGNUP : actions.ON_SUBMIT_LOGIN,
          resp: response.data,
        });
      })
      .catch((err) => {
        console.log('Error occurred while signing up a user: ', err);
      });
  };
};
