import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
  let transformedIngredient =
    props.ingredients &&
    Object.keys(props.ingredients)
      .map((key) => {
        return [...Array(props.ingredients[key])].map((_, index) => {
          return <BurgerIngredient key={key + index} type={key} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);

  if (transformedIngredient && transformedIngredient.length === 0) {
    transformedIngredient = <p>Please start adding Ingresients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
