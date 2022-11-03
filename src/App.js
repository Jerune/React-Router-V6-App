import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { HTMLCourses, CSSCourses, JSCourses } from './data/courses'

import Home from './components/Home'
import About from './components/About'
import Teachers from './components/Teachers'
import Courses from './components/Courses'
import Header from './components/Header'
import CourseContainer from './components/courses/CourseContainer'
import NotFound from './components/NotFound'
import Featured from './components/Featured'

function App () {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='teachers'>
            <Route index element={<Teachers />}/>
            <Route path=':topic/:lname-:fname' element={<Featured />} />
        </Route>
        <Route path='courses' element={<Courses />}>
          <Route index element={<Navigate to='html' />} />
          <Route path='html' element={<CourseContainer data={HTMLCourses}/>} />
          <Route path='css' element={<CourseContainer data={CSSCourses}/>} />
          <Route path='javascript' element={<CourseContainer data={JSCourses}/>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
