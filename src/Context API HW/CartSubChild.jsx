import React, { useContext } from 'react';
import TestContext from './ItemContext';

const CartSubChild = () => {
    const { cart } = useContext(TestContext);

    return (
        <div id='Cart'>
            <h2>Your Cart</h2>
            {cart.length > 0 ? (
                <table border={1} cellPadding={10} cellSpacing={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>₹{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No items in cart</p>
            )}
        </div>
    );
};

export default CartSubChild;
