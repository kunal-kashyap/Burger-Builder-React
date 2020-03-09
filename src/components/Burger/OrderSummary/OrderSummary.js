import React from 'react'

import Aux from '../../../HOC/auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(key => {
        return (
        <li key={key}>
            <span style={{textTransform: 'capitalize'}}>{key}</span>
            :  
            {props.ingredients[key]}
        </li>
        )
    })
    return (
        <Aux>
            <h3> Your Order </h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: </strong> ${props.price}</p>
            <p>Continue to Checkout</p>

            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    )
}

export default OrderSummary