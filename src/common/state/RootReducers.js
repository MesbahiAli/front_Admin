import { combineReducers } from "redux";
import AuthReducer from "../../modules/Authentification/state/AuthReducer";

const rootReducer = combineReducers({
  Auth: AuthReducer,
  //....
});

export default rootReducer;