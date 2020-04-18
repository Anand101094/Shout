import { takeEvery, put, all } from 'redux-saga/effects'

import userApis from "../../api/userApi"

function* loginUser(action) {
    console.log('3')
    let response = yield userApis.login(action.userCredentials)
    console.log(response)
    if (response.data) {
        yield put({ type: "LOGIN_SUCCESS", userToken: response.data.token }) 
    } else {
        yield put({ type: "LOGIN_FAILED" })
    }
}

export default function* rootSaga() {
    yield takeEvery("LOGIN_REQUESTED", loginUser)
}


