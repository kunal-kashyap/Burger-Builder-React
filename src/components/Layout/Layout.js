import React, { Component } from 'react';

import Auxiliary from '../../HOC/auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Loader from '../UI/Loader/Loader';
import { connect } from 'react-redux';
import { getAuthToken } from '../../utils/constants';
import {
  getAuthState,
  onLogout,
  onSubmitLogin,
} from '../../containers/Login/store/actions';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  componentDidMount() {
    this.props.getAuthState();
  }

  sideDrawerClosedHandler = () => {
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  };

  render() {
    const { loader, isLoggedIn, children } = this.props,
      { showSideDrawer } = this.state;
    return (
      <Auxiliary>
        <Toolbar
          isLoggedIn={isLoggedIn}
          OpenMenu={this.sideDrawerClosedHandler}
        />
        <SideDrawer
          open={showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        {loader.showLoader && <Loader />}
        <main className={classes.Content}>{children}</main>
      </Auxiliary>
    );
  }
}

Layout.defaultProps = {
  loader: false,
};

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
    isLoggedIn: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAuthState: () => dispatch(getAuthState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
