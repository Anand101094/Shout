import axios from 'axios'

const userApis = {
    login: (userCredentials) => {
        return axios
            .post("/login", userCredentials)
            .then((res) => {
                return res
            })
            .catch((error) => {
                console.log(error)
                return error
            });
    },

    signUpUser: (signUpData) => {
        return axios
            .post("/signup", signUpData)
            .then(res => {
                console.log(res)
                return res
            })
            .catch(error => {
                console.log(err)
                return error
            })
    },

    getUserDetails: (userToken) => {
        let headers={
            authorization: userToken
        }
        return axios
            .get("/user", {headers})
            .then(res => {
                return res
            })
            .catch(error => {
                console.log(error)
                return error
            })
    },

    addUserDetails: (payload) => {
        let body = payload.userDetails

        let headers={
            authorization: payload.userToken
        }

        return axios
            .post("/user", body, {headers})
            .then(res => {
                return res
            })
            .catch(error => {
                console.log(error)
                return error
            })
    }


}

export default userApis