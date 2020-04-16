import { actions } from './constants';
import axios from '../../../axios-orders';
import { getAuthToken } from '../../../utils/constants';

export const fetchOrders = () => {
  return (dispatch) => {
    axios
      .get(`/orders.json?auth=${getAuthToken()}`)
      .then((response) => {
        let orders = [];
        for (let k in response.data) {
          orders.push({ [k]: response.data[k] });
        }
        dispatch({
          type: actions.FETCH_ORDERS,
          orders,
        });
      })
      .catch((err) => {
        console.log('Error occurred while fetching orders: ', err);
      });
  };
};
