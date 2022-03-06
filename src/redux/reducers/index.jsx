import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
import loadingReducer from "./loadingReducer";
import practiceListenReducer from "./practiceListenReducer"
import tokenReducer from "./tokenReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    course: courseReducer,
    auth: authReducer,
    practiceListen: practiceListenReducer,
    loading: loadingReducer,
    token: tokenReducer,
    user: userReducer
})

export default rootReducer