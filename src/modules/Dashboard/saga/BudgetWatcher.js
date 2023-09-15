import { takeLatest } from "redux-saga/effects";

import * as ActionsTypes from "../../../common/state/StatesConstants";
import {BudgetSaga} from "./BudgetSaga";

export default function*BudgetWatcher() {
    yield takeLatest(ActionsTypes.BUDGET_START,BudgetSaga);}