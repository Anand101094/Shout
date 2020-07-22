import { FETCHING_SHOUTS, POST_SHOUT, DELETE_SHOUT, LIKE_SHOUT, UNLIKE_SHOUT, POST_COMMENT, GET_SHOUT, RESET_SHOUT_DATA} from "../constant";

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
  deleteShout: (payload) => {
    return {
      type: DELETE_SHOUT,
      payload
    };
  },
  likeShout: (payload) => {
    return {
      type: LIKE_SHOUT,
      payload
    };
  },
  unlikeShout: (payload) => {
    return {
      type: UNLIKE_SHOUT,
      payload
    };
  },
  postComment: (payload) => {
    return{
      type: POST_COMMENT,
      payload
    }
  },
  getShout: (payload) => {
    return{
      type: GET_SHOUT,
      payload
    }
  },
  resetShoutData: () => {
    return{
      type: RESET_SHOUT_DATA,
    }
  }
};

export default shoutAction
