import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormElement from '../../components/UI/FormElement/FormElement';
import Button from '../../components/UI/Button/Button';

import classes from './style.css';
import { getAuthToken, REGEX } from '../../utils/constants';
import { onSubmitLogin, onLogout } from './store/actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    isSignUp: false,
  };

  errors = {};

  componentDidMount() {
    this.loadHandler();
  }

  loadHandler = async () => {
    if (this.props.location.fromLogout) {
      await this.props.onLogout();
      localStorage.removeItem('loginToken');
    }

    if (getAuthToken() != null) {
      this.props.history.push('/home');
    }
  };

  submitLoginForm = async (e) => {
    e.preventDefault();
    const { onSubmitLogin } = this.props,
      { email, password, isSignUp } = this.state;
    let params = {
      email,
      password,
      returnSecureToken: true,
    };
    await onSubmitLogin(params, isSignUp);
    this.props.history.push('/home');
  };

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
            : (this.errors.email = 'Invalid Name Format');
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
    const { email, password } = this.state,
      { errors } = this.state;

    return (
      email.length > 0 &&
      password.length > 0 &&
      Object.keys(errors).length === 0
    );
  };

  switchSignMode = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { isSignUp: !prevState.isSignUp };
    });
  };
  render() {
    const { email, password, errors, isSignUp } = this.state;
    let isValid = this.checkFormValidity();
    return (
      <div className={classes.loginForm}>
        <h2> {!isSignUp ? 'Login !' : 'Sign Up !'}</h2>
        <form>
          <FormElement
            errorMessage={errors.userName}
            chandler={this.changeHandler}
            value={email}
            formType="input"
            type="text"
            name="email"
            placeholder="Enter Email"
            label="User Email ID"
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
          <Button btnType="Danger" clicked={this.switchSignMode}>
            Switch To {isSignUp ? 'SignIn' : 'SignUp'}
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitLogin: (params, isSignUp) =>
      dispatch(onSubmitLogin(params, isSignUp)),
    onLogout: () => dispatch(onLogout()),
  };
};

export default connect(null, mapDispatchToProps)(Login);
