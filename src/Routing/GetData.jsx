import React from 'react'
import { useLocation } from 'react-router-dom'

const GetData = () => {
    const loc = useLocation();
    const { eid, enm, eage, eloc } = loc.state?.result || {};  // Safe access with fallback

    return (
        <div>
            {eid ? (
                <ul>
                    <li>Employee ID: {eid}</li>
                    <li>Employee Name: {enm}</li>
                    <li>Employee Age: {eage}</li>
                    <li>Employee Location: {eloc}</li>
                </ul>
            ) : (
                <p>No data available</p>
            )}
        </div>
    )
}

export default GetData
