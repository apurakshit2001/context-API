import React, { useContext } from 'react';
import TestContext from './ItemContext';

const ItemListChild = () => {
    const { items, addToCart } = useContext(TestContext);

    return (
        <table border={1} cellPadding={10} cellSpacing={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.type}</td>
                        <td>
                            <a href='#Cart'>
                                <button onClick={() => addToCart(item)}>BUY</button>
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ItemListChild;
