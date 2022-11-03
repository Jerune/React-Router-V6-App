import React from 'react'
import Course from './Course'
import PropTypes from 'prop-types'

const CourseContainer = ({ data }) => {
  const courses = data.map((course) => {
    return (
      <Course
        title={course.title}
        desc={course.description}
        img={course.img_src}
        key={course.id}
      />
    )
  })
  return (
    <div>
      <ul>
        {courses}
      </ul>
    </div>
  )
}

CourseContainer.propTypes = {
  data: PropTypes.array
}

export default CourseContainer
