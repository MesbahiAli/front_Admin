import { all } from "redux-saga/effects";
import AuthWatcher from "../../modules/Authentification/saga/AuthWatcher";
import BudgetWatcher from "../../modules/Dashboard/saga/BudgetWatcher";
export default function* rootSaga() {
  yield all([
    AuthWatcher(),
    BudgetWatcher()
  ]);
}
