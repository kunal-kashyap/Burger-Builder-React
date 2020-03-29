import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import {connect} from 'react-redux'

import CheckoutSummary from '../../components/Orders/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component{

    continueCheckout = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    cancelCheckout = () => {
        this.props.history.goBack()
    }

    render() {
        const {ingredients} = this.props;
        return (
            <div>
                <CheckoutSummary 
                    cancelCheckout={this.cancelCheckout} 
                    continueCheckout={this.continueCheckout} 
                    ingredients={ingredients} />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData} />    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        ingredients: state.ingredients,
    }
}

export default connect(mapStateToProps)(Checkout)