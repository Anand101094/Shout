import { FETCHING_SHOUTS } from "../constant";

const shoutAction = {
  fetchShouts: () => {
    return {
      type: FETCHING_SHOUTS,
    };
  },
};

export default shoutAction
