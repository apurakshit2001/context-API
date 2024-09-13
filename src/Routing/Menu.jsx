import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    const [info, setInfo] = useState({
        eid: 1,
        enm: 'Arpan',
        eage: 24,
        eloc: 'Habra'
    })

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                <li><Link to="/test1">UseCase1</Link></li>
                <li><Link to="/test2">UseCase2</Link></li>
                <li><Link to={`/test3/${info.eid}`}>UseCase3</Link></li>
                <li><Link to="test4" state={{ result: info }}>UseCase4</Link></li>
            </ul>
        </div>
    )
}

export default Menu
