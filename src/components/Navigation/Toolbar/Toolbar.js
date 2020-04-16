import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div onClick={props.OpenMenu} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <Logo />
      </div>
      {props.isLoggedIn && (
        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
      )}
    </header>
  );
};

export default Toolbar;
