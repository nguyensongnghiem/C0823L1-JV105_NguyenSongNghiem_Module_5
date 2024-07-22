import {combineReducers} from "redux";
import studentReducer from "./StudentReducer";

const reducer =  combineReducers({
    students: studentReducer,
    // teachers: teacherReducer,
    // classrooms: classroomsReducer
})
export default reducer;