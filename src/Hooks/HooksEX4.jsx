import React, { useState } from "react";

const HooksEX4 = () => {
    
    const [info, setInfo] = useState({
        nm: '',
        em: '',
        dp: ''
    });

    const [res, setRes] = useState('');

    const valupd = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const disp = () => {
        let re = `Name: ${info.nm} Email: ${info.em} Dept: ${info.dp}`;
        setRes(re);
    };

    return (
        <div>
            Name: <input type="text" onChange={valupd} name="nm" />
            <br />
            <br />
            Email: <input type="email" onChange={valupd} name="em" />
            <br />
            <br />
            Dept:
            <select onChange={valupd} name="dp">
                <option value="">select dept</option>
                <option value="computer">computer</option>
                <option value="civil">civil</option>
                <option value="electrical">electrical</option>
                <option value="automobile">automobile</option>
            </select>
            <br />
            <br />
            <button onClick={disp}>Click</button>
            <br />
            <br />
            <div>{res}</div>
        </div>
    );
};

export default HooksEX4;