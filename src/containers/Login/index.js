import React, { Component } from 'react';

import FormElement from '../../components/UI/FormElement/FormElement';
import Button from '../../components/UI/Button/Button';

import classes from './style.css';
import { REGEX } from '../../utils/constants';

class Login extends Component {
  state = {
    userName: '',
    password: '',
    errors: {},
  };

  errors = {};

  submitLoginForm = () => {};
  changeHandler = (name, value) => {
    this.setState({ [name]: value });

    this.validateForm(name, value);
  };

  validateForm = (name, value) => {
    var inputItem =
      document.getElementsByName(name) && document.getElementsByName(name)[0];

    if (value) {
      switch (name) {
        case 'userName':
          REGEX.USER_NAME.test(value)
            ? delete this.errors[name]
            : (this.errors.userName = 'Invalid Name Format');
          break;
        case 'password':
          REGEX.PASSWORD.test(value)
            ? delete this.errors[name]
            : (this.errors.password = 'Invalid password');
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
    const { userName, password } = this.state,
      { errors } = this.state;

    return (
      userName.length > 0 &&
      password.length > 0 &&
      Object.keys(errors).length === 0
    );
  };
  render() {
    const { userName, password, errors } = this.state;
    let isValid = this.checkFormValidity();
    return (
      <div className={classes.loginForm}>
        <h2>Login !</h2>
        <form>
          <FormElement
            errorMessage={errors.userName}
            chandler={this.changeHandler}
            value={userName}
            formType="input"
            type="text"
            name="userName"
            placeholder="Enter User Name"
            label="User Name"
          />
          <FormElement
            errorMessage={errors.password}
            chandler={this.changeHandler}
            value={password}
            formType="input"
            type="password"
            name="password"
            placeholder="Enter password"
            label="Password"
          />

          <Button
            disabled={!isValid}
            btnType="Success"
            clicked={this.submitLoginForm}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
