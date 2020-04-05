import { actions } from './constants';
import axios from '../../../axios-orders';

export const onSubmitLogin = (order) => {
  return (dispatch) => {
    debugger;
    // axios
    //   .post('/orders.json', order)
    //   .then((response) => {
    //     dispatch({
    //       type: actions.ON_SUBMIT_LOGIN,
    //       resp: response.data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log('Error occurred while making a orders: ', err);
    //   });
  };
};
