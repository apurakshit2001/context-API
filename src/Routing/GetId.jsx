import React from 'react'
import { useParams } from 'react-router-dom'

const GetId = () => {
    const { eid } = useParams();
  return (
    <div>
        <h1>Id: {eid}</h1>
    </div>
  )
}

export default GetId
