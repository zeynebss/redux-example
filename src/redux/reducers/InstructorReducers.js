import { GET_INSTRUCTORS } from "../constants/InstructorConstants";


export const getInstructorsReducers=(state={state:[]},action)=>{
    switch(action.type){
        case GET_INSTRUCTORS:
            if(action.payload){
                return{
                    ...state,
                    instructors:action.payload
                }
            }
            break;
            default:
                return state;

        
    }

}