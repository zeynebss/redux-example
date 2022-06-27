import { GET_COURSE_VIDEOS } from "../constants/VideoContentCostants";

export const getCourseVideoContentReducers=(state={state:[]},action)=>{
    switch(action.type){
        case GET_COURSE_VIDEOS:
            if(action.payload){
              return{
                ...state,
                videos:action.payload
              }
            }
            default:
                return state;
    }
}