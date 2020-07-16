import { LOGIN_REQUESTED, SESSION_EXPIRED, SIGNUP_REQUESTED, GET_USER_DETAILS } from '../constant'

const userActions = {

    login: (userCredentials) => {
        return {
            type: LOGIN_REQUESTED,
            userCredentials
        }
    },

    setExpiredSession: () => {
        return {
            type: SESSION_EXPIRED
        }
    },

    signUp: (signUpData) => {
        return{
            type: SIGNUP_REQUESTED,
            signUpData
        }
    },
    getUserDetails: (payload) => {
        return{
            type: GET_USER_DETAILS,
            payload
        }
    }
    
}

export default userActions