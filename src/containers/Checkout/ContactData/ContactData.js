import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from '../../../axios-orders'

import Button from '../../../components/UI/Button/Button'
import Loader from '../../../components/UI/Loader/Loader'
import classes from './style.css'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    }

    orderHandler = (e) => {
        e.preventDefault();

        const {ingredients, totalPrice} = this.props;
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
             .then((resp) => {
                this.setState({loading: false})
                this.props.history.push('/')
             })
             .catch(err => this.setState({loading: false}))
        

        console.log(this.props.ingredients)
    }

    render () {
        return (
            this.state.loading ? 
                <Loader />
                :
                <div className={classes.ContactData}>
                    <h4>Enter your Contact Data</h4>
                    <form>
                        <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                        <input className={classes.Input} type="text" name="email" placeholder="Your email" />
                        <input className={classes.Input} type="text" name="street" placeholder="Street" />
                        <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                        <Button btnType="Success" clicked={this.orderHandler}>Order Now</Button>
                    </form>
                </div>
        )
    }
}

export default withRouter(ContactData)