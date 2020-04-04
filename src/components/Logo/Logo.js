import React from 'react';

import logo from '../../assets/images/logo.bmp';
import classes from './Logo.css';

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
