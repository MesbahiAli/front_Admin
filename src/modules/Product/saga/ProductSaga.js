import { put, call } from "redux-saga/effects";
import * as actions from "../state/ProductsActions";
import { ProductGetApi, ProductPatchApi, ProductPostApi } from "../../../common/services/ProductService";

export function * ProductGetSaga(action) {
  const request = action.request;
  try {
    const response = yield call(ProductGetApi, request.payload);
    if (request) {
      yield put(actions.productGetSuccess(response));
      yield call(request.successCallBack, response);
    }
  } catch (error) {
    yield put(actions.productGetFail(error));
    yield call(request.failCallBack, error);
  }
}


export function * ProductPostSaga(action) {
  const request = action.request;
  try {
    const response = yield call(ProductPostApi, request.payload);
    if (request) {
      yield put(actions.productPostSuccess(response));
      yield call(request.successCallBack, response);
    }
  } catch (error) {
    yield put(actions.productPostFail(error));
    yield call(request.failCallBack, error);
  }
}



export function * ProductPatchSaga(action) {
  const request = action.request;
  try {
    const response = yield call(ProductPatchApi, request.payload);
    if (request) {
      yield put(actions.productPatchSuccess(response));
      yield call(request.successCallBack, response);
    }
  } catch (error) {
    yield put(actions.productPatchFail(error));
    yield call(request.failCallBack, error);
  }
}