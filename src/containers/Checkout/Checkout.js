import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../components/Orders/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component{

    state = {
        ingredients: null,
        totalPrice: 0,
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for ( let param of query.entries()){
            if(param[0] === 'price') {
                price = param[1];
            }
            else {
                ingredients[param[0]] = +param[1]
            }
        }

        this.setState({ingredients, totalPrice: price})
    }

    continueCheckout = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    cancelCheckout = () => {
        this.props.history.goBack()
    }

    render() {
        const {ingredients, totalPrice} = this.state;
        return (
            <div>
                <CheckoutSummary 
                    cancelCheckout={this.cancelCheckout} 
                    continueCheckout={this.continueCheckout} 
                    ingredients={ingredients} />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={() => (<ContactData ingredients={ingredients} totalPrice={totalPrice}/>)} />    
            </div>
        )
    }
}

export default Checkout