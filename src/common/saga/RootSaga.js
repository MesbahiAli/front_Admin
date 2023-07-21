import { all } from "redux-saga/effects";
import AuthWatcher from "../../modules/Authentification/saga/AuthWatcher";

// all saga's watchers call
export default function* rootSaga() {
  yield all([
    AuthWatcher(),
    //....
  ]);
}
