import React, { Component } from 'react'
import Aux from '../../HOC/auxiliary/Auxiliary'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

import Burger from '../../components/Burger/Burger'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7, 
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 2,
            cheese: 1,
            bacon: 1,
            meat: 2,
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice =  oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }

    removeIngredientHandler = (type) => {

    }

    render() {
        let {ingredients} = this.state;
        return (
            <Aux>
                <Burger ingredients={ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder