import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
import listenCourseReducer from "./listenCourseReducer";
import practiceListenReducer from "./practiceListenReducer"


const rootReducer = combineReducers({
    course: courseReducer,
    practiceListen: practiceListenReducer,
    listenCourse: listenCourseReducer,
    auth: authReducer,
})

export default rootReducer