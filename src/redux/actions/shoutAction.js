import { FETCHING_SHOUTS, POST_SHOUT } from "../constant";

const shoutAction = {
  fetchShouts: () => {
    return {
      type: FETCHING_SHOUTS,
    };
  },
  postShout: (payload) => {
    return {
      type: POST_SHOUT,
      payload
    };
  },
};

export default shoutAction
