import { BASE_URL } from "../../api/BaseConfig";
import { GET_INSTRUCTORS } from "../constants/InstructorConstants";

export const getInstructors=()=>async(dispatch,getState)=>{
    const instructors=await( await fetch(`${BASE_URL}/api/Instructor`)).json()
    dispatch({
        type:GET_INSTRUCTORS,
        payload:instructors
    })
}

