import { SELECT_AD } from "../actions/ads";

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_AD:
      return {...action.payload};

    default:
      return state;
  }
};
