import { LOGIN_REQUESTED, SESSION_EXPIRED, SIGNUP_REQUESTED } from '../constant'

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
    }
    
}

export default userActions