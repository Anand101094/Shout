import axios from 'axios'

const shoutApis = {
    getAllShouts: () => {
        return axios
            .get("/shouts")
            .then((res) => {
                return res
            })
            .catch((error) => {
                console.log(error)
                return error
            });
    },
}

export default shoutApis