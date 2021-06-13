import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import CoursesComponent from '../../components/Courses/Courses'
import { COURSES_PAGE } from '../../services/constant'

const Courses = () => {

    return (
        <>
            <Navigation currentPage={COURSES_PAGE} />
            <CoursesComponent/>
        </>
    )
}

export default Courses
