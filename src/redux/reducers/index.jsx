import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import practiceListenReducer from "./practiceListenReducer"

const rootReducer = combineReducers({
    course: courseReducer,
    practiceListen: practiceListenReducer,
})

export default rootReducer