import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
import loadingReducer from "./loadingReducer";
import listenCourseReducer from "./listenCourseReducer";
import practiceListenReducer from "./practiceListenReducer"
import tokenReducer from "./tokenReducer";
import topicReducer from "./topicReducer";
import userReducer from "./userReducer";
import vocaReducer from "./vocaReducer";
import speakReducer from "./speakReducer";
import popUpReducer from "./popUpReducer";
import userProcessReducer from "./userProcessReducer";


const rootReducer = combineReducers({
    course: courseReducer,
    practiceListen: practiceListenReducer,
    loading: loadingReducer,
    token: tokenReducer,
    user: userReducer,
    voca: vocaReducer,
    topic: topicReducer,
    listenCourse: listenCourseReducer,
    auth: authReducer,
    speak: speakReducer,
    popup: popUpReducer,
    userProcess: userProcessReducer
})

export default rootReducer