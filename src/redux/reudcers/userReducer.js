const initialState = {}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_REQUESTED":
            console.log('2')
            return {
                ...state,
                loggedIn: 'pending'
            }

        case "LOGIN_SUCCESS":
            return {
                ...state,
                loggedIn: 'true',
                userToken: action.userToken
            }

        case "LOGIN_FAILED":
            return {
                ...state,
                loggedIn: 'false'
            }

        default:
            return state

    }
}