import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Teachers from './components/Teachers'
import Courses from './components/Courses'
import Header from './components/Header'

function App () {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='teachers' element={<Teachers />} />
        <Route path='courses' element={<Courses />} />
      </Routes>
    </div>
  )
}

export default App
