import {createStore , applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()
// const middleWares = []
// const enhancers = [applyMiddleware(...middleWares)]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(mySaga)

export default store

