import React, { Component } from 'react';

import Auxiliary from '../../HOC/auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Loader from '../UI/Loader/Loader';
import { connect } from 'react-redux';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  };

  render() {
    return (
      <Auxiliary>
        <Toolbar OpenMenu={this.sideDrawerClosedHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        {this.props.loader.showLoader && <Loader />}
        <main className={classes.Content}>{this.props.children}</main>
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
  };
};

export default connect(mapStateToProps)(Layout);
