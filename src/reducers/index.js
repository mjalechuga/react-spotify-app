import { combineReducers } from "redux";
import authReducer from "./authReducer";
import scopesReducer from "./scopesReducer";
import routeReducer from "./routeReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  items: scopesReducer,
  route: routeReducer
});
