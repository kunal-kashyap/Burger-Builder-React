import React, { Component } from 'react';

import Order from '../../components/Orders/Order';
import axios from '../../axios-orders';
import { fetchOrders } from './store/actions';
import { connect } from 'react-redux';
import {
  addIngredients,
  fetchIngredients,
  removeIngredients,
} from '../BurgerBuilder/store/actions';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  renderedOrders = null;

  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const renderedOrders = this.props.orders.map((item) => {
      return (
        <Order
          orderId={Object.keys(item)}
          orderData={item[Object.keys(item)]}
        />
      );
    });

    return <React.Fragment>{renderedOrders}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
