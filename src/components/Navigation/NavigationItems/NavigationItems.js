import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/home"> Burger Builder </NavigationItem>
      <NavigationItem link="/orders"> Orders </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
