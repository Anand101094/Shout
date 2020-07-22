const axios = require("axios")

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
    let headers = {
      authorization: payload.userToken
    }
    return axios
      .post("/shout", body, { headers })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },

  deleteShout: (payload) => {
    let headers = {
      authorization: payload.userToken
    }
    return axios
      .delete(`/shout/${payload.shoutId}`, { headers })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },

  likeShout: (payload) => {
    let headers = {
      authorization: payload.userToken
    }
    return axios
      .get(`/shout/${payload.shoutId}/like`, { headers })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },

  unlikeShout: (payload) => {
    let headers = {
      authorization: payload.userToken
    }
    return axios
      .get(`/shout/${payload.shoutId}/unlike`, { headers })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },

  postComment: (payload) => {
    let body = {
      body: payload.postData,
    };
    let headers = {
      authorization: payload.userToken
    }
    return axios
      .post(`/shout/${payload.shoutId}/comment`, body, { headers })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },

  getShout: (payload) => {
    return axios
      .get(`/shout/${payload.shoutId}`)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};

export default shoutApis;
