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

function* signUpUser(action) {
  let response = yield userApis.signUpUser(action.signUpData);
  if (response.data) {
    yield put({ type: "SIGNUP_SUCCESS", userToken: response.data.token });
  } else {
    yield put({ type: "SIGNUP_FAILED" });
  }
}

function* postShout(action) {
  let response = yield shoutApi.postShout(action.postData);
  if (response.data) {
    yield put({ type: "POST_SHOUT_SUCCESS", userToken: response.data });
  } else {
    yield put({ type: "POST_SHOUT_FAILED" });
  }
}

function* getUserDetails(action) {
  let response = yield userApis.getUserDetails(action.payload);
  if (response.data) {
    yield put({ type: "GET_USER_DETAILS_SUCCESS", userDetails: response.data });
  } else {
    yield put({ type: "GET_USER_DETAILS_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery("SIGNUP_REQUESTED", signUpUser)
  yield takeEvery("LOGIN_REQUESTED", loginUser);
  yield takeEvery("GET_USER_DETAILS", getUserDetails);
  yield takeEvery("FETCHING_SHOUTS", getAllShouts);
  yield takeEvery("POST_SHOUT", postShout);
}
