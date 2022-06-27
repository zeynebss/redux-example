import React,{useEffect} from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

import DetailLeft from '../components/detaiLeft/DetailLeft'
import DetailRight from '../components/detailRight/DetailRight'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getByIdCourse } from '../redux/actions/CourseAction'
import AllCourses from '../components/allcourses/AllCourses'
const Detail = () => {
  let {id}=useParams();
  const {course} = useSelector(state =>state.courseById)
  console.log(course)
  const dispatch = useDispatch()
  useEffect(() => {
          dispatch(getByIdCourse(id))
  }, [dispatch,id])
  return (
  
    <section className="detail">

      <div className="container">
    
        <div className="row justify-content-between">
          <div className="col-lg-12">
          
          </div>
          <DetailLeft data={course}/>
          <DetailRight data={course}/>
          {/* <AllCourses/> */}
        </div>
      </div>

    </section>
  )
}

export default Detail