import axios from 'axios'

const userApis = {
    login: (userCredentials) => {
        return axios
            .post("/login", userCredentials)
            .then((res) => {
                console.log(res);
                return res
            })
            .catch((error) => {
                console.log(error)
                return error
            });
    },

    signup: (newUserData) => {
        return axios
            .post("/signup", newUserData)
            .then((res) => {
                console.log(res);
                return res
            })
            .catch((error) => {
                console.log(error);
                return error
            });
    },

    


}

export default userApis