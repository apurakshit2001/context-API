import React, { useState } from 'react'
import Task from './Task'

const Willunmount = () => {
    const [status, setStatus] = useState(false)
    return (
        <div>
            <input type="button" value={status ? "Hide" : "Show"}
                onClick={() => {
                    setStatus(!status)
                }} />
                {status ? <Task /> : null}
        </div>
    )
}

export default Willunmount