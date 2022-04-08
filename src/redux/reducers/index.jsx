import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
import loadingReducer from "./loadingReducer";
import listenCourseReducer from "./listenCourseReducer";
import practiceListenReducer from "./practiceListenReducer";
import listenPartReducer from "./listenPartReducer";

import tokenReducer from "./tokenReducer";
import topicReducer from "./topicReducer";
import userReducer from "./userReducer";
import vocaReducer from "./vocaReducer";


const rootReducer = combineReducers({
    course: courseReducer,
    practiceListen: practiceListenReducer,
    loading: loadingReducer,
    token: tokenReducer,
    user: userReducer,
    voca: vocaReducer,
    topic: topicReducer,
    listenCourse: listenCourseReducer,
    listenPart: listenPartReducer,
    auth: authReducer,
})

export default rootReducer