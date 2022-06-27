import { BASE_URL } from "../../api/BaseConfig"
import { GET_COURSE_VIDEOS } from "../constants/VideoContentConstants"


export const getCourseVideoContent=(courseId)=>async(dispatch,getState)=>{
    const videos=await (await fetch(`${BASE_URL}api/VideoContent/videos/${courseId}`)).json()
    dispatch({
        type:GET_COURSE_VIDEOS,
        payload:videos
    })
}