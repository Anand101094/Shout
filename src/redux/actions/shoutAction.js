import { FETCHING_SHOUTS, POST_SHOUT } from "../constant";

const shoutAction = {
  fetchShouts: () => {
    return {
      type: FETCHING_SHOUTS,
    };
  },
  postShout: (postData) => {
    return {
      type: POST_SHOUT,
      postData
    };
  },
};

export default shoutAction
