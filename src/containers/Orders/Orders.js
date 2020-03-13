import React, { Component } from 'react'


import Order from '../../components/Orders/Order'
import axios from '../../axios-orders'


class Orders extends Component {

    state = {
        orders: [],
        loading: true,
    }
    renderedOrders = null

    componentDidMount() {
        let orders = [];
        axios.get('/orders.json')
             .then(resp => {
                 for(let k in resp.data) {
                     orders.push({[k]: resp.data[k]})
                 }
                 this.setState({orders})
                }) 
    }

    render () {
        const renderedOrders = this.state.orders.map((item) => {
            return (
                <Order orderId={Object.keys(item)} orderData={item[Object.keys(item)]} />
            )
            
        })

        return (
            <React.Fragment>
                {renderedOrders}
            </React.Fragment>
        )

    }
}

export default Orders