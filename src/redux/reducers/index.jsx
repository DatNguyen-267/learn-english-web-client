import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import listenCourseReducer from "./listenCourseReducer";
import practiceListenReducer from "./practiceListenReducer"


const rootReducer = combineReducers({
    course: courseReducer,
    practiceListen: practiceListenReducer,
    listenCourse: listenCourseReducer
})

export default rootReducer