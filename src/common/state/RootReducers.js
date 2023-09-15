import { combineReducers } from "redux";
import AuthReducer from "../../modules/Authentification/state/AuthReducer";
import BudgetReducer from "../../modules/Dashboard/state/BudgetReducer";

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Budget:BudgetReducer
});

export default rootReducer;