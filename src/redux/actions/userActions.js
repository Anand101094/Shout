import { LOGIN_REQUESTED, SESSION_EXPIRED  } from '../constant'

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
    }
    
}

export default userActions