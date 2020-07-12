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
        shouts:action.shouts
      };
    case "FETCHING_SHOUTS_FAILED":
      return {
        ...state,
        fetchingShouts: "failed",
      };
    default:
      return state;
  }
}
