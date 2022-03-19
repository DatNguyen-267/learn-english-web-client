import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
import loadingReducer from "./loadingReducer";
import practiceListenReducer from "./practiceListenReducer"
import tokenReducer from "./tokenReducer";
import topicReducer from "./topicReducer";
import userReducer from "./userReducer";
import vocaReducer from "./vocaReducer";

const rootReducer = combineReducers({
    course: courseReducer,
    auth: authReducer,
    practiceListen: practiceListenReducer,
    loading: loadingReducer,
    token: tokenReducer,
    user: userReducer,
    voca: vocaReducer,
    topic: topicReducer,
})

export default rootReducer