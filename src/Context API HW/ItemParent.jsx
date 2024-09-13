import React, { useState, useEffect } from 'react';
import TestContext from './ItemContext';
import ItemListChild from './ItemListChild';
import CartSubChild from './CartSubChild';

export const ItemParent = () => {
    const [cart, setCart] = useState([]);
    const [msg, setMsg] = useState(null)
    const [items, setItems] = useState([
        { id: 1, name: 'Yemaha F1', price: 3200, type: 'Yemaha' },
        { id: 2, name: 'Givson CB-BLUE', price: 3800, type: 'Givson' },
        { id: 3, name: 'Hertz HZA-4010-NA', price: 4000, type: 'Hertz' },
        { id: 4, name: 'YAMAHA F280', price: 7200, type: 'YAMAHA' },
        { id: 5, name: 'Yamaha F310', price: 9900, type: 'YAMAHA' },
        { id: 6, name: 'Hertz HZR-3801E', price: 10000, type: 'Hertz' },
        { id: 7, name: 'Ortega RST5', price: 1200, type: 'Ortega' },
        { id: 8, name: 'Fender CD60 V3', price: 12500, type: 'Fender' },
        { id: 9, name: 'Ibanez V50NJP-NT', price: 10500, type: 'Ibanez' },
        { id: 10, name: 'Cort AD810', price: 7000, type: 'Cort' },
        { id: 11, name: 'Epiphone DR-100', price: 9500, type: 'Epiphone' },
        { id: 12, name: 'Taylor Baby Taylor', price: 30000, type: 'Taylor' },
        { id: 13, name: 'Givson Crown', price: 3600, type: 'Givson' },
        { id: 14, name: 'Washburn WD7S', price: 8500, type: 'Washburn' },
        { id: 15, name: 'Alvarez RD26', price: 9900, type: 'Alvarez' },
        { id: 16, name: 'Seagull S6 Original', price: 38000, type: 'Seagull' },
        { id: 17, name: 'Yamaha APX600', price: 18000, type: 'YAMAHA' },
        { id: 18, name: 'Fender FA-125', price: 14500, type: 'Fender' }
    ]);
    


    useEffect(() => {
        setTimeout(() => {
            setMsg("Please wait a little...");
        }, 2000);
    }, []);


    const addToCart = (item) => {
        let isDuplicate = false;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === item.id) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            setCart([...cart, item]);
        } else {
            alert('Item is already in the cart.');
        }
    };


    return (
        <TestContext.Provider value={{ items, cart, addToCart }}>
            <ItemListChild />
            {msg ? <p>{msg}</p> : null}
            <CartSubChild />
            <a href="#" className='up'>^</a>
        </TestContext.Provider>
    );
};