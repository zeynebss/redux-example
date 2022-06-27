import { BASE_URL } from "../../api/BaseConfig";
import { GET_CATEGORY_COURSES,GET_DISCOUNT_COURSES,GET_ID_COURSE,GET_INSTRUCTORS_COURSES,GET_POPULAR_COURSES } from "../constants/CourseConstants";


export const getDiscountCourses=()=>async(dispatch,getState)=>{
    const data=await(await fetch(`${BASE_URL}api/Course/discount`)).json()
    dispatch({
        type:GET_DISCOUNT_COURSES,
        payload:data
    })
}

export const getPopularCourses=()=>async(dispatch,getState)=>{
    const data=await(await fetch(`${BASE_URL}api/Course/populars`)).json()
    dispatch({
        type:GET_POPULAR_COURSES,
        payload:data
    })
}

export const getByIdCourse=(id)=>async(dispatch,getState)=>{
    const data=await(await fetch(`${BASE_URL}api/Course/${id}`)).json()
    dispatch({
        type:GET_ID_COURSE,
        payload:data
    })
}
export const getByCategoryCourse=(categoryId)=> async(dispatch,getState)=>{
    const data=await (await fetch(`${BASE_URL}api/Course/category/${categoryId}`)).json()
    dispatch({
        type:GET_CATEGORY_COURSES,
        payload:data
    })
}
export const getByInstructorCourse=(instructorId)=> async(dispatch,getState)=>{
    const data=await (await fetch(`${BASE_URL}api/Course/instructor/${instructorId}`)).json()
    dispatch({
        type:GET_INSTRUCTORS_COURSES,
        payload:data
    })
}