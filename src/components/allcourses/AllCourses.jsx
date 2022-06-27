import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularCourses } from '../../redux/actions/CourseAction'
import OneCourse from '../onecourse/OneCourse'
const AllCourses = () => {
    const courses = useSelector(state => state.coursesPopular)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularCourses())
    }, [dispatch])
    return (
        <div className="all-courses">
            <div className="row">
                {courses.courses.map(data => (
                    <div className="col-lg-3" key={data.id}>
                        <OneCourse data={data}/>
                    </div>
                ))}


            </div>

        </div>
    )
}

export default AllCourses