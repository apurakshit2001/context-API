import React, { Component } from 'react'
import './Css.css'
import Cart from './CartCompo'

export default class Items extends Component {

    state = {
        itemList: [
            { id: 1, name: "tshirt", price: 500 },
            { id: 2, name: "jeans", price: 900 },
            { id: 3, name: "Watch", price: 2000 },
            { id: 4, name: "sunglass", price: 1500 },
            { id: 5, name: "Shoe", price: 2500 }
        ],

        addedItems: [],
        quantity: "1"
    }

    itemref = React.createRef();

    itemAdded = (item) => {
        this.setState({
            addedItems: [...this.state.addedItems, item],
            quantity: this.state.quantity
        })
    }

    qnt = (e) => {
        this.setState({ quantity: e.target.value })
    }

    render() {
        return (
            <>
                <h3>Item List</h3>
                <table border='1' className='table'>
                    <tr>
                        <th>SL.</th>
                        <th>Item Name</th>
                        <th>Item Price (Per Item)</th>
                        <th>Item Quanlity</th>
                        <th>Action</th>
                    </tr>
                    {
                        this.state.itemList.map((item, index) => {
                            return <>
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <select name="quantity" id='' onChange={this.qnt} >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </td>
                                    <td><button onClick={() => this.itemAdded(item)}>Buy Now</button></td>
                                </tr>
                            </>
                        })
                    }

                </table>

            <Cart addedCart={this.state.addedItems} quantity={this.state.quantity} />

            </>
        )
    }
}
