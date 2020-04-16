import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        exact
        to={{ pathname: props.link, fromLogout: props.fromLogout }}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
