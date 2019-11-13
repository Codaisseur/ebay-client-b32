import { SET_ADS, ADD_AD } from "../actions/ads";

export default (state = [], action) => {
  switch (action.type) {
    case SET_ADS:
      return [ ...action.payload ];

    case ADD_AD:
      return [...state, action.ad];

    default:
      return state;
  }
};
