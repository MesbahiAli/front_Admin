import { combineReducers } from "redux";
import AuthReducer from "../../modules/Authentification/state/AuthReducer";
import BudgetReducer from "../../modules/Dashboard/state/BudgetReducer";
import ProductReducer from "../../modules/Product/state/ProdcutsReducer";

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Budget: BudgetReducer,
  Product: ProductReducer,
});

export default rootReducer;