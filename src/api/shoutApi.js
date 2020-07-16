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
  postShout: (postData) => {
    let body = {
      body: postData,
    };
    let headers = {
      authorization: localStorage.getItem("userToken"),
    };
    return axios
      .post("/shout", body, headers)
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
