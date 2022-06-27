import React from 'react'
import AllCourses from '../all-course/AllCourses'
import '../popular-course/popular-course.scss'

const PopularCourses = () => {
  return (
    <section className="popular-course-area">
        <div className="container">
            <div className="row justify-content-between align-items-center">
            <h3>Most Popular Courses</h3>
            <div className="popular-courses row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="first-side">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className=" text-area second-side">
                      <button type='button' className='btn btn-dark'>All courses</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <AllCourses/>
                </div>
            </div>
    
    </section>
  )
}

export default PopularCourses