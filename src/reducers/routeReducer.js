import { CURRENT_ROUTE } from "../actions/types";
const INITIAL_STATE = {
  path: "/"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_ROUTE:
      return { ...state, path: action.payload };
    default:
      return state;
  }
};
