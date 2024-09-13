import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'John', age: 22, loc: 'New York', dept: 'Developer' },
        { id: 2, name: 'Jane', age: 30, loc: 'Los Angeles', dept: 'Musician' },
        { id: 3, name: 'Bob', age: 25, loc: 'Kolkata', dept: 'Photographer' }
    ]);

    useEffect(() => {
        // Check if there are already items in localStorage
        const storedItems = JSON.parse(localStorage.getItem('items'));

        if (storedItems) {
            setItems(storedItems);
        } else {
            // If no items are in localStorage, initialize with the default items
            localStorage.setItem('items', JSON.stringify(items));
        }
    }, [items]);


    return (
        <div>
            <h1>Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Location</th>
                        <th>Department</th>
                        <th>Action-1</th>
                        <th>Action-2</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.loc}</td>
                                <td>{item.dept}</td>
                                <td >
                                    <Link to={`/delete/${item.id}`} className='links'>DELETE</Link>
                                </td>
                                <td >
                                    <Link to={`/edit/${item.id}`} className='links'>EDIT</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
