import * as ActionsTypes from '../../../common/state/StatesConstants';

export const BUDGET_START = (payload) => ({
    type: ActionsTypes.BUDGET_START,
    payload, // Ensure that payload is correctly set
  });

export const BUDGET_SUCCESS = (response) => ({
  type: ActionsTypes.BUDGET_SUCCESS,
  response,
});

export const BUDGET_FAIL = (error) => ({
  type: ActionsTypes.BUDGET_FAIL,
  error,
});


export const addBudget = (budgetData) => {
    return {
        type: ActionsTypes.ADD_BUDGET,
        payload: budgetData,
    };
};

