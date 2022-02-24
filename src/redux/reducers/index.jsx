import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
import practiceListenReducer from "./practiceListenReducer"

const rootReducer = combineReducers({
    course: courseReducer,
    auth: authReducer,
    practiceListen: practiceListenReducer,
})

export default rootReducer