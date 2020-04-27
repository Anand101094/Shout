import { types } from "../constant"

const initialState = {}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUESTED:
            return {
                ...state,
                loggedIn: 'pending'
            }

        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: 'true',
                userToken: action.userToken
            }

        case types.LOGIN_FAILED:
            return {
                ...state,
                loggedIn: 'false'
            }

        case types.SIGNUP_REQUESTED:
            return {
                ...state,
                signedUp: 'pending'
            }

        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                signedUp: 'true',
                userToken: action.userToken
            }

        case types.SIGNUP_FAILED:
            return {
                ...state,
                signedUp: 'false'
            }

        default:
            return state

    }
}