import React, { Component } from 'react'

import CheckoutSummary from '../../components/Orders/CheckoutSummary/CheckoutSummary'

class Checkout extends Component{

    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            meat:  1,
            bacon: 1,
        } 
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for ( let param of query.entries()){
            ingredients[param[0]] = +param[1];
        }

        this.setState({ingredients})
    }

    continueCheckout = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    cancelCheckout = () => {
        this.props.history.goBack()
    }

    render() {
        const {ingredients} = this.state;
        return (
            <div>
                <CheckoutSummary cancelCheckout={this.cancelCheckout} continueCheckout={this.continueCheckout} ingredients={ingredients} />
            </div>
        )
    }
}

export default Checkout