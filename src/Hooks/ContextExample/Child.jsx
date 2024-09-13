import React, { useContext } from 'react';
import SubChild from './SubChild';
import TestContext from './Create';

const Child = () => {
    const {names} = useContext(TestContext);

    return (
        <div>
            <h1>Child Component</h1>
            <div className="cityNames">
                <ol>
                    {names.map(city => (
                        <li key={city.id}>{city.name}</li> 
                    ))}
                </ol>
            </div>
            <SubChild />
        </div>
    );
}

export default Child;
