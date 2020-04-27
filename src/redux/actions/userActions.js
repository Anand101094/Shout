import { types } from '../constant'

const userActions = {

    login: (userCredentials) => {
        return {
            type: types.LOGIN_REQUESTED,
            userCredentials
        }
    },

    signup: (newUserData) => {
        return {
            type: types.SIGNUP_REQUESTED,
            newUserData
        }
    },


}

export default userActions