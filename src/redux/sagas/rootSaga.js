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
  let response = yield shoutApi.postShout(action.payload);
  if (response.data) {
    yield put({ type: "POST_SHOUT_SUCCESS" });
    yield put({ type: "FETCHING_SHOUTS" })
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

function* deleteShout(action) {
  let response = yield shoutApi.deleteShout(action.payload);
  if (response.data) {
    yield put({ type: "DELETE_SHOUT_SUCCESS" });
  } else {
    yield put({ type: "DELETE_SHOUT_FAILED" });
  }
}

function* likeShout(action) {
  let response = yield shoutApi.likeShout(action.payload);
  if (response.data) {
    yield put({ type: "LIKE_SHOUT_SUCCESS" });
  }
}

function* unlikeShout(action) {
  let response = yield shoutApi.unlikeShout(action.payload);
  if (response.data) {
    yield put({ type: "UNLIKE_SHOUT_SUCCESS" });
  }
}

function* postComment(action) {
  let response = yield shoutApi.postComment(action.payload);
  if (response.data) {
    yield put({ type: "POST_COMMENT_SUCCESS" });
    yield put({ type: "FETCHING_SHOUTS" })
  } else {
    yield put({ type: "POST_COMMENT_FAILED" });
  }
}

function* getShout(action) {
  let response = yield shoutApi.getShout(action.payload);
  if (response.data) {
    yield put({ type: "GET_SHOUT_SUCCESS", shoutsCommentData: response.data });
  } else {
    yield put({ type: "GET_SHOUT_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery("SIGNUP_REQUESTED", signUpUser)
  yield takeEvery("LOGIN_REQUESTED", loginUser);
  yield takeEvery("GET_USER_DETAILS", getUserDetails);
  yield takeEvery("FETCHING_SHOUTS", getAllShouts);
  yield takeEvery("POST_SHOUT", postShout);
  yield takeEvery("DELETE_SHOUT", deleteShout);
  yield takeEvery("LIKE_SHOUT", likeShout);
  yield takeEvery("UNLIKE_SHOUT", unlikeShout);
  yield takeEvery("POST_COMMENT", postComment);
  yield takeEvery("GET_SHOUT", getShout);

}
