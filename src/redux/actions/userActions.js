import { LOGIN_REQUESTED } from '../constant'

const userActions = {

    login: (userCredentials) => {
        return {
            type: LOGIN_REQUESTED,
            userCredentials
        }
    },

    
}

export default userActions