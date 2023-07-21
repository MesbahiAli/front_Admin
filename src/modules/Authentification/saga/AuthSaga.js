import { put, call } from "redux-saga/effects";
import * as actions from "../state/AuthAction";
import { AuthApi } from "../../../common/services/AuthService";

export function * AuthSaga(action) {
  const request = action.request;
 try {
    const response =  yield call(AuthApi, request.payload);
    console.log(response)
    yield put(actions.AUTH_SUCCESS(response));
    yield call(request.successCallBack, response);

  } catch (error) {
    yield put(actions.AUTH_FAIL(error));
    yield call(request.failCallBack, error);
  }
}
