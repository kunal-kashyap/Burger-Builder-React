import { actions } from './constants';
import axios from '../../../axios-orders';

export const letsOrders = (order) => {
  return (dispatch) => {
    axios
      .post('/orders.json', order)
      .then((response) => {
        dispatch({
          type: actions.ORDER_A_BURGER,
          resp: response.data,
        });
      })
      .catch((err) => {
        console.log('Error occurred while making a orders: ', err);
      });
  };
};
