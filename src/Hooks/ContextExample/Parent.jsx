import React, { useState,useEffect } from 'react';
import TestContext from './Create';
import Child from './Child';

const Parent = () => {
    const [msg, setMsg] = useState("Context API example..");
    const [city, setCity] = useState([
        { id: 1, name: "New York" },
        { id: 2, name: "Kolkata"},
        { id: 3, name: "Mumbai" },
        { id: 4, name: "Hawrah"},
        { id: 5, name: "Delhi" },
        { id: 6, name: "Kochi" },
        { id: 7, name: "Goa" },
    ])

    useEffect(() => {
        setTimeout(() => {
            setMsg("Update.....")
        }, 5000);
    }, [])


    return (
        <div>
            <h1>Parent Component</h1>
            <TestContext.Provider value={{ result: msg ,names: city}}>
                <Child />
            </TestContext.Provider>
        </div>
    );
}

export default Parent;
