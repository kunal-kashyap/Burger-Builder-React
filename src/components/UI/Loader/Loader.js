import React from 'react';

import classes from './Loader.css';

const Loader = () => {
  return (
    <div className={classes.mainLoader}>
      <div className={classes.loader}>Loading...</div>
    </div>
  );
};

export default Loader;
