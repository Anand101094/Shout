import jwt_decode from "jwt-decode";
const initialState = {};

let userToken = localStorage.getItem("userToken");
if (userToken) {
  let decodedToken = jwt_decode(userToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    initialState.authenticated = false;
  } else {
    initialState.authenticated = true;
    initialState.userToken = userToken;
  }
} else {
  initialState.authenticated = false;
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUESTED":
      return {
        ...state,
        loggedIn: "pending",
        authenticated: false,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loggedIn: "true",
        userToken: action.userToken,
        authenticated: true,
      };

    case "LOGIN_FAILED":
      return {
        ...state,
        loggedIn: "false",
        authenticated: false,
      };

    case "SESSION_EXPIRED":
      return {
        ...state,
        authenticated: false,
      };

    case "SIGNUP_REQUESTED":
      return {
        ...state,
        signedUp: "pending",
        authenticated: false,
      };

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        signedUp: "true",
        userToken: `Bearer ${action.userToken}`,
        authenticated: true,
      };

    case "SIGNUP_FAILED":
      return {
        ...state,
        signedUp: "false",
        authenticated: false,
      };

    case "GET_USER_DETAILS":
      return {
        ...state,
        getUserDetails: "pending",
        userDetails: null,
      };

    case "GET_USER_DETAILS_SUCCESS":
      return {
        ...state,
        getUserDetails: "completed",
        userDetails: action.userDetails,
      };

    case "GET_USER_DETAILS_FAILED":
      return {
        ...state,
        getUserDetails: "failed",
        userDetails: null,
      };

      case "ADD_USER_DETAILS":
      return {
        ...state,
        addUserDetails: "pending",
      };

    case "ADD_USER_DETAILS_SUCCESS":
      return {
        ...state,
        addUserDetails: "completed",
      };

    case "ADD_USER_DETAILS_FAILED":
      return {
        ...state,
        addUserDetails: "failed",
      };

    default:
      return state;
  }
}
