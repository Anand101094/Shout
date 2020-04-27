import { types } from "../constant"
import { takeEvery, put, takeLatest } from 'redux-saga/effects'

import userApis from "../../api/userApi"

function* loginUser(action) {
    let response = yield userApis.login(action.userCredentials)
    if (response.data) {
        yield put({ type: types.LOGIN_SUCCESS, userToken: response.data.token })
    } else {
        yield put({ type: types.LOGIN_FAILED })
    }
}

function* signupUser(action) {
    let response = yield userApis.signup(action.newUserData)
    if (response.data) {
        yield put({ type: types.SIGNUP_SUCCESS, userToken: response.data.token })
    } else {
        yield put({ type: types.SIGNUP_FAILED })
    }
}

export default function* rootSaga() {
    yield takeEvery(types.LOGIN_REQUESTED, loginUser)
    yield takeLatest(types.SIGNUP_REQUESTED, signupUser)
}


