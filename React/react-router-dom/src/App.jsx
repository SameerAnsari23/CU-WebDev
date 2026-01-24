import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <h1>Welcome to React Router Dom</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App