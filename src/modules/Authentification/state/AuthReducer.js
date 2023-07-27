import { updateObject } from "../../../common/utils/UpdateObjectUtility";
import * as ActionsTypes from "../../../common/state/StatesConstants";

const initialState = {
  token: null,
  error: null,
  isLoading: false,
};

const authStart = (state, action) => {
  return updateObject(state, {
    token: null,
    error: null,
    isLoading: true,
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.response.authorization_token,
    isLoading: false,
    error: null,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    token: null,
    isLoading: false,
    error: action.error.message,
  });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.AUTH_START:
      return authStart(state, action);
    case ActionsTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case ActionsTypes.AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default authReducer;

