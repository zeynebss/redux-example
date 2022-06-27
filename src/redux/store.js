import { getCategoriesReducers } from "./reducers/CategoryReducers";
import { getByCategoryCourseReducers, getByIdCourseReducers, getByInstructorCourseReducers, getCourseDiscountReducers, getCoursePopularsReducers } from "./reducers/CourseReducers";
import { getInstructorsReducers } from "./reducers/InstructorReducers";
import { getCourseVideoContentReducers } from "./reducers/VideoContentReducers";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");  

const reducer=combineReducers({
   coursesPopular:getCoursePopularsReducers,
   coursesDiscount:getCourseDiscountReducers,
   courseById:getByIdCourseReducers,
   courseByCategories:getByCategoryCourseReducers,
   courseByInstructors:getByInstructorCourseReducers,
   categories:getCategoriesReducers,
   instructors:getInstructorsReducers,
   videos:getCourseVideoContentReducers
})
const initialState={

}
const middleware=[thunk]
const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;