import {  GET_CATEGORY_COURSES, GET_DISCOUNT_COURSES, GET_ID_COURSE, GET_INSTRUCTORS_COURSES, GET_POPULAR_COURSES } from "../constants/CourseConstants";


export const getCoursePopularsReducers=(state={courses:[]},action)=>{
switch (action.type) {
    case GET_POPULAR_COURSES:
        if(action.payload){
            return{
   
                ...state,
                 courses:action.payload
            }
        }
            default:
        return state;
}
}

export const getCourseDiscountReducers=(state={courses:[]},action)=>{
    switch (action.type) {
        case GET_DISCOUNT_COURSES:
            if(action.payload){
                return{
                    ...state,
                    courses:action.payload
            }
            }
                default:
            return state;
    }
    }
    export const getByIdCourseReducers=(state={course:{}},action)=>{
        switch (action.type) {
            case GET_ID_COURSE:
                if(action.payload){
                    return{
                        ...state,
                        course:action.payload
                }
                }
                break;
                    default:
                return state;
        }
        }
        export const getByCategoryCourseReducers=(state={courses:[]},action)=>{
            switch (action.type) {
                case GET_CATEGORY_COURSES:
                    if(action.payload){
                        return{
                            ...state,
                            courses:action.payload
                    }
                    }
                    break;
                        default:
                    return state;
            }
            }
            export const getByInstructorCourseReducers=(state={courses:[]},action)=>{
                switch (action.type) {
                    case GET_INSTRUCTORS_COURSES:
                        if(action.payload){
                            return{
                                ...state,
                                courses:action.payload
                        }
                        }
                        break;
                            default:
                        return state;
                }
                }
