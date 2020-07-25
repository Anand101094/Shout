const initialState = {};

export function shoutReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHING_SHOUTS":
      return {
        ...state,
        fetchingShouts: "pending",
      };
    case "FETCHING_SHOUTS_SUCCESS":
      return {
        ...state,
        fetchingShouts: "completed",
        shouts: action.shouts
      };
    case "FETCHING_SHOUTS_FAILED":
      return {
        ...state,
        fetchingShouts: "failed",
      };
    case "POST_SHOUT":
      return {
        ...state,
        postShout: "pending",
      };
    case "POST_SHOUT_SUCCESS":
      return {
        ...state,
        postShout: "completed",
      };
    case "POST_SHOUT_FAILED":
      return {
        ...state,
        postShout: "failed",
      };

    case "DELETE_SHOUT":
      return {
        ...state,
        shoutDelete: "pending",
      };

    case "DELETE_SHOUT_SUCCESS":
      return {
        ...state,
        shoutDelete: "completed",
      };

    case "DELETE_SHOUT_FAILED":
      return {
        ...state,
        shoutDelete: "failed",
      };

    case "LIKE_SHOUT":
    case "LIKE_SHOUT_SUCCESS":
      return {
        ...state
      };

    case "UNLIKE_SHOUT":
    case "UNLIKE_SHOUT_SUCCESS":
      return {
        ...state
      };

    case "POST_COMMENT":
      return {
        ...state,
        postComment: "pending",
      };

    case "POST_COMMENT_SUCCESS":
      return {
        ...state,
        postComment: "completed",
      };

    case "POST_COMMENT_FAILED":
      return {
        ...state,
        postComment: "failed",
      };

    case "GET_SHOUT":
      return {
        ...state,
        getShout: "pending",
      };

    case "GET_SHOUT_SUCCESS":
      return {
        ...state,
        getShout: "completed",
        shoutsCommentData: action.shoutsCommentData,
      };

    case "GET_SHOUT_FAILED":
      return {
        ...state,
        getShout: "failed",
      };

    case "RESET_SHOUT_DATA":
      return {
        ...state,
        shoutData: [],
      };

    default:
      return state;
  }
}
