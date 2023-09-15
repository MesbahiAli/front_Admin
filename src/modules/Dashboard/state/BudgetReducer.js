    import { updateObject } from "../../../common/utils/UpdateObjectUtility";
    import * as ActionsTypes from "../../../common/state/StatesConstants";

    const initialState = {
        BudgetData : [] ,
        error: null,
        isLoading: false,
    };

    const budgetStart = (state) => {
        return updateObject(state, {
            BudgetData : null ,
            error: null,
            isLoading: true,
        });
    };


    const budgetSuccess = (state, action) => {
        return updateObject(state, {
        BudgetData: action.response.budgets,
        isLoading: false,
        error: null,
        });
    };
    

    const budgetFail = (state, action) => {
        console.log('error:', action.error.message);
        return updateObject(state, {
            BudgetData: null,
            isLoading: false,
            error: action.error.message,
        });
    };


    const AjoutBudgetReducer = (state, action) => {
        const newBudget = action.payload;
        return updateObject(state, {
            BudgetData: [...state.BudgetData, newBudget],
            isLoading: false,
            error: null,
        });
    };

    const BudgetReducer = (state = initialState, action) => {
        switch (action.type) {
            case ActionsTypes.BUDGET_START:
                return budgetStart(state, action);
            case ActionsTypes.BUDGET_SUCCESS:
                return budgetSuccess(state, action);
            case ActionsTypes.BUDGET_FAIL:
                return budgetFail(state, action);
            case ActionsTypes.ADD_BUDGET:
                return AjoutBudgetReducer(state, action);
            default:
                return state;
        }
    };

    export default BudgetReducer ;

