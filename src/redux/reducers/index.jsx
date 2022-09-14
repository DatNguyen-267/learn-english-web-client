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
import speakReducer from "./speakReducer";
import popUpReducer from "./popUpReducer";
import userProcessReducer from "./userProcessReducer";

import grammarReducer from "./grammarReducer";
import grammarTopicReducer from "./grammarTopicReducer";
import storeReducer from "./storeReducer";
import noteReducer from "./noteReducer";
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
    speak: speakReducer,
    popup: popUpReducer,
    userProcess: userProcessReducer,
    grammar: grammarReducer,
    grammarTopic: grammarTopicReducer,
    store: storeReducer,
    note: noteReducer,
})

export default rootReducer