import React, { useContext } from 'react';
import TestContext from './Create';

const SubChild = () => {
    const { result } = useContext(TestContext);

    return (
        <div>
            <h1>SubChild Component</h1>
            <p>Result: {result}</p>
        </div>
    );
}

export default SubChild;
