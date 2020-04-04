import React from 'react';
import classes from './style.css';

const Order = (props) => {
  console.log(props);
  const { orderId, orderData } = props;
  let ingredients = [];
  for (let i in orderData.ingredients) {
    ingredients.push(i);
  }
  const renderedIngredients = ingredients.map((item) => {
    return (
      <span className={classes.ingredient}>
        {item} ({orderData.ingredients[item]})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <h2>Order ID : {orderId}</h2>
      <p>Ingredients : {renderedIngredients}</p>
      <p>
        Price: <strong>USD {orderData.totalPrice}</strong>
      </p>
    </div>
  );
};

export default Order;
