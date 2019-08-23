import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { composeWithDevTools } from "redux-devtools-extension";

import channelReducer from "./channel/reducer";
import userReducer from "./user/reducer";
import userSaga from "./user/sagas";

const sagaMiddleware = createSagaMiddleware();

/*
  Having a root saga can helps run multiple sagas
  So in our example we could have:
  yield all([userSaga(), authSaga(), channelSaga()]);
  This could be beneficial if our app grows.
  all() is used to run multiple effects in parallel
*/
function* rootSaga() {
  yield all([userSaga()]);
}

const rootReducer = combineReducers({
  channel: channelReducer,
  user: userReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

// console.log(store.getState());

export default store;
