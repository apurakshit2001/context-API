import React, { Component } from 'react'

export default class Cart extends Component {


    render() {
        return (
            <>
                <h3>Add To Cart</h3>

                <table align='Center' border="1">

                    <tr>
                        <th> Item Name </th>
                        <th> Order Quantity </th>
                        <th> Total price </th>
                    </tr>

                    {this.props.addedCart.map((item, index) => {
                        return <>
                            <tr key={item.index}>
                                <td>{item.name}</td>
                                <td>{this.props.quantity}</td>
                                <td>{Number(this.props.quantity) * Number(item.price)}</td>
                            </tr>

                        </>
                    })}

                </table>

            </>
        )
    }
}