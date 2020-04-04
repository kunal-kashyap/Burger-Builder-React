import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../../axios-orders';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Loader from '../../../components/UI/Loader/Loader';
import classes from './style.css';
import FormElement from '../../../components/UI/FormElement/FormElement';
import { REGEX } from '../../../utils/constants';
import WithErrorHandler from '../../../HOC/WithErrorHandler/WithErrorHandler';
import { letsOrders } from '../store/actions';

class ContactData extends Component {
  state = {
    orderForm: {
      name: '',
      address: '',
      pinCode: '',
      email: '',
      deliveryMethod: '',
    },
    loading: false,
    errors: {},
  };

  errors = {};

  orderHandler = (e) => {
    e.preventDefault();

    const { ingredients, totalPrice } = this.props,
      { orderForm } = this.state;

    const order = {
      ingredients,
      totalPrice,
      orderForm,
    };
    this.setState({ loading: true }, async () => {
      await this.props.letsOrderBurger(order);
      this.setState({ loading: false });
      this.props.history.push('/');
    });
  };

  changeHandler = (name, value) => {
    let orderForm = { ...this.state.orderForm, [name]: value };
    this.setState({ orderForm });

    this.validateForm(name, value);
  };

  validateForm = (name, value) => {
    var inputItem =
      document.getElementsByName(name) && document.getElementsByName(name)[0];

    if (value) {
      switch (name) {
        case 'name':
          REGEX.NAME.test(value)
            ? delete this.errors[name]
            : (this.errors.name = 'Invalid Name Format');
          break;
        case 'email':
          REGEX.EMAIL_ID.test(value)
            ? delete this.errors[name]
            : (this.errors.email = 'Invalid Email Format');
          break;
        case 'pinCode':
          REGEX.PIN_CODE.test(value)
            ? delete this.errors[name]
            : (this.errors.pinCode = 'Invalid pincode');
          break;
        default:
          delete this.errors[name];
          break;
      }
    } else {
      delete this.errors[name];
    }
    this.setState({ errors: this.errors });
  };

  checkFormValidity = () => {
    const {
        name,
        email,
        pinCode,
        address,
        deliveryMethod,
      } = this.state.orderForm,
      { errors } = this.state;

    return (
      name.length > 0 &&
      email.length > 0 &&
      pinCode.length > 0 &&
      address.length > 0 &&
      deliveryMethod != null &&
      Object.keys(errors).length === 0
    );
  };

  render() {
    let {
        name,
        email,
        pinCode,
        address,
        deliveryMethod,
      } = this.state.orderForm,
      { errors } = this.state,
      isValid = this.checkFormValidity();

    return this.state.loading ? (
      <Loader />
    ) : (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <FormElement
            errorMessage={errors.name}
            chandler={this.changeHandler}
            value={name}
            formType="input"
            type="text"
            name="name"
            placeholder="Your name"
            label="Your name"
          />
          <FormElement
            errorMessage={errors.email}
            chandler={this.changeHandler}
            value={email}
            formType="input"
            type="text"
            name="email"
            placeholder="Your email"
            label="Your email"
          />
          <FormElement
            errorMessage={errors.address}
            chandler={this.changeHandler}
            value={address}
            formType="textarea"
            name="address"
            placeholder="Address"
            label="Your Address"
          />
          <FormElement
            errorMessage={errors.pinCode}
            chandler={this.changeHandler}
            value={pinCode}
            formType="input"
            type="text"
            name="pinCode"
            placeholder="Postal Code"
            label="Postal Code"
          />
          <FormElement
            errorMessage={errors.deliveryMethod}
            chandler={this.changeHandler}
            value={deliveryMethod}
            formType="select"
            label="Delivery Method"
            name="deliveryMethod"
          >
            <option>Fastest</option>
            <option>General</option>
          </FormElement>
          <Button
            disabled={!isValid}
            btnType="Success"
            clicked={this.orderHandler}
          >
            Order Now
          </Button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    totalPrice: state.burgerBuilder.totalPrice,
    ingredients: state.burgerBuilder.ingredients,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    letsOrderBurger: (order) => dispatch(letsOrders(order)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(WithErrorHandler(ContactData, axios)));
