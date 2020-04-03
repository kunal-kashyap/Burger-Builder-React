import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from '../../axios-orders'


import Aux from '../../HOC/auxiliary/Auxiliary'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import Burger from '../../components/Burger/Burger'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Loader from '../../components/UI/Loader/Loader'
import WithErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler'
import {addIngredients, removeIngredients} from '../../store/actions'

class BurgerBuilder extends Component {
    state = {
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

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map((key) => {
            return ingredients[key]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        return sum > 0
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    cancelPurchase = () => {
        this.setState({purchasing: false})
    }

    purchaseContinue = () => {
            this.props.history.push({pathname: '/checkout'})
    }

    render() {
        let {purchasing} = this.state,
            {totalPrice,ingredients, onIngredientAdded, onIngredientRemoved} = this.props;
        const disabledInfo = {
            ...this.props.ingredients
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
                    ingredientAdded={onIngredientAdded} 
                    ingredientRemoved={onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={this.updatePurchaseState(ingredients)}
                    price={totalPrice}
                    ordered={this.purchaseHandler}
                    />
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIngredientAdded: (ingName) => dispatch(addIngredients(ingName)),
        onIngredientRemoved: (ingName) => dispatch(removeIngredients(ingName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios))