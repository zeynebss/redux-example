import { GET_CATEGORIES } from "../constants/CategoryConstants";

export const getCategoriesReducers=(state={categories:[]},action)=>{
    switch(action.type){
     case GET_CATEGORIES:
         if(action.payload){
             return{
                 ...state,
                 categories:action.payload
             }
         }
         break;
         default:
             return state;
    }

}