import { put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

// Worker Saga
function* fetchUserSaga() {
  try {
    // const res = yield axios.get("https://jsonplaceholder.typicode.com/users/1");
    // Using call is better if you want to test your saga
    const res = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users/1"
    );
    yield put({ type: "FETCH_USER_SUCCESS", payload: { user: res.data } });
  } catch (error) {
    yield put({ type: "FETCH_USER_FAILED", payload: { error } });
  }
}

// Watcher Saga
function* watchUserSaga() {
  yield takeLatest("FETCH_USER", fetchUserSaga);
  // yield takeEvery("FETCH_USER", fetcUserSaga);
}

export default watchUserSaga;

// expect(fetchUserSaga.next().value).toEqual(
//   call(axios.get, "https://jsonplaceholder.typicode.com/users/1")
// );
// Here, we're just testing if the value of the gererator object is
// calling the function.
// If we did not use call, we would have to mock the axios response
// and compare the values.
