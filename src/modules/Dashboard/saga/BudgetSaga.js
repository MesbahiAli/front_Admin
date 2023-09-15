import { put, call } from 'redux-saga/effects';
import * as actions from '../state/BudgetActions';
import { BudgetApi } from '../../../common/services/BudgetService';

export function* BudgetSaga(action) {
    try {
      const response = yield call(BudgetApi, action.payload); // action.payload should be a string
      yield put(actions.BUDGET_SUCCESS(response));
    } catch (error) {
      yield put(actions.BUDGET_FAIL(error));
    }
  }