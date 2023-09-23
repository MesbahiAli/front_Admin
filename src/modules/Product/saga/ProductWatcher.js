import { takeLatest } from "redux-saga/effects";
import * as ActionsTypes from "../../../common/state/StatesConstants";
import { ProductGetSaga, ProductPatchSaga, ProductPostSaga } from "./ProductSaga";

// watcher for sagas concerned with matrix's manipulation
export default function*ProductWatchar() {
  yield takeLatest(ActionsTypes.PRODUCT_GET_START,ProductGetSaga);
  yield takeLatest(ActionsTypes.PRODUCT_POST_START,ProductPostSaga);
  yield takeLatest(ActionsTypes.PRODUCT_PATCH_START,ProductPatchSaga);
}
