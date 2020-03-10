import React, { Component } from 'react'
import axios from '../../axios-orders'


import Aux from '../../HOC/auxiliary/Auxiliary'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import Burger from '../../components/Burger/Burger'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Loader from '../../components/UI/Loader/Loader'
import WithErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7, 
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {},
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
    }

    componentDidMount(){
        axios.get('/ingredients.json')
             .then(response => {
                 this.setState({ingredients: response.data})
             })
             .catch(err => {})
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
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount - 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice =  oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map((key) => {
            return ingredients[key]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({purchasable: sum > 0});
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    cancelPurchase = () => {
        this.setState({purchasing: false})
    }

    purchaseContinue = () => {
        const {ingredients, totalPrice} = this.state;
        const order = {
            ingredients,
            totalPrice,
            customer: {
                name: 'Kunal',
                address: {
                    street: 'lane2',
                    pinCode: 102834,
                    country: 'India'
                },
                email: 'testOrder@react.in'
            },
            deliveryMethod: 'fastest'
        }

        this.setState({loading: true})
       axios.post('/orders.json', order)
             .then(resp => this.setState({loading: false, purchasing: false}))
             .catch(err => this.setState({loading: false, purchasing: false}))

    }

    render() {
        let {ingredients, totalPrice, purchasable, purchasing} = this.state;
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = <OrderSummary 
                            price={totalPrice}
                            purchaseCancelled={this.cancelPurchase}
                            purchaseContinued={this.purchaseContinue}
                            ingredients={ingredients}/>
        if(this.state.loading) {
            orderSummary = <Loader/>
        }
        return (
            <Aux>
                <Modal show={purchasing} modalClosed={this.cancelPurchase}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={purchasable}
                    price={totalPrice}
                    ordered={this.purchaseHandler}
                    />
            </Aux>
        )
    }
}

export default WithErrorHandler(BurgerBuilder, axios)