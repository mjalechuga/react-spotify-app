import { CURRENT_USER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return { ...state, details: action.payload };
    default:
      return state;
  }
};
