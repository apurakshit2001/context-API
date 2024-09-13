import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Delete = () => {
    const { id } = useParams(); 
    const [deletedItem, setDeletedItem] = useState(null); 

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];
        const updatedItems = storedItems.filter(item => item.id !== parseInt(id));
        localStorage.setItem('items', JSON.stringify(updatedItems));
        

        const itemToDelete = storedItems.find(item => item.id === parseInt(id));
        const storeDeletedItems = localStorage.setItem('deletedItems', JSON.stringify(itemToDelete))
        const getDeletedItems = JSON.parse(localStorage.getItem('deletedItems')) || [];
        setDeletedItem(getDeletedItems);
    }, [id]);

    return (
        <div>
            <h1>Deleted Item</h1>
            {deletedItem ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Location</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{deletedItem.name}</td>
                            <td>{deletedItem.age}</td>
                            <td>{deletedItem.loc}</td>
                            <td>{deletedItem.dept}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>No item found to delete!</p>
            )}
        </div>
    );
};

export default Delete;
