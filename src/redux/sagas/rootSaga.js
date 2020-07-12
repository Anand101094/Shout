import { takeEvery, put, all, take } from "redux-saga/effects";

import userApis from "../../api/userApi";
import shoutApi from "../../api/shoutApi"

function* loginUser(action) {
  let response = yield userApis.login(action.userCredentials);
  if (response.data) {
    yield put({ type: "LOGIN_SUCCESS", userToken: response.data.token });
  } else {
    yield put({ type: "LOGIN_FAILED" });
  }
}

function* getAllShouts(action) {
  let response = yield shoutApi.getAllShouts();
  if (response.data) {
    yield put({ type: "FETCHING_SHOUTS_SUCCESS", shouts: response.data });
  } else {
    yield put({ type: "FETCHING_SHOUTS_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery("LOGIN_REQUESTED", loginUser);
  yield takeEvery("FETCHING_SHOUTS", getAllShouts);
}
