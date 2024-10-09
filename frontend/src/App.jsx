import React from 'react'
import Navbar from './Navbar'
import {Routes, Route} from 'react-router-dom'
import Create from './Create'
import Read from './Read'
import Update from './Update'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/all' element={<Read />} />
        <Route path='/:id' element={<Update />} />
      </Routes>
    </div>
  )
}

export default App

