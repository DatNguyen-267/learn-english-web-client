import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";


const rootReducer = combineReducers({
    course: courseReducer,
    auth: authReducer,
})

export default rootReducer