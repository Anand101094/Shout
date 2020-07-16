import axios from "axios";

const shoutApis = {
  getAllShouts: () => {
    return axios
      .get("/shouts")
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  postShout: (payload) => {
    let body = {
      body: payload.postData,
    };
    let headers={
      authorization: payload.userToken
  }
    return axios
      .post("/shout", body, {headers})
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};

export default shoutApis;
