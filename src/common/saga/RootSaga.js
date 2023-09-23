import { all } from "redux-saga/effects";
import AuthWatcher from "../../modules/Authentification/saga/AuthWatcher";
import BudgetWatcher from "../../modules/Dashboard/saga/BudgetWatcher";
import ProductWatchar from "../../modules/Product/saga/ProductWatcher";


export default function* rootSaga() {
  yield all([
    AuthWatcher(),
    BudgetWatcher(),
    ProductWatchar()
  ]);
}
