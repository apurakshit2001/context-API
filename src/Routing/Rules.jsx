import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from './Menu'
import GetId from './GetId'
import GetData from './GetData'

const Rules = () => {
  return (
    <div>
        <h1>Rules</h1>
        <Menu />
        <Routes>
            <Route path="/test3/:eid" element={<GetId />} />
            <Route path="/test4" element={<GetData />} />
        </Routes>
    </div>
  )
}

export default Rules
