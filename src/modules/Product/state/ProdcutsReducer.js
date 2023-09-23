import { updateObject } from "../../../common/utils/UpdateObjectUtility";
import * as ActionsTypes from "../../../common/state/StatesConstants";

const initialState = {
    Products: null,
    error: null,
    isLoading: false,
};

const productGetStart = (state) => {
    return updateObject(state, {
        Products: null,
        error: null,
        isLoading: true,
    });
};


const productGetSuccess = (state, action) => {
    return updateObject(state, {
        Products: action.response.data.products,
        isLoading: false,
        error: null,
    });
};


const productGetFail = (state, action) => {
    return updateObject(state, {
        Products: null,
        isLoading: false,
        error: action.error.message,
    });
};



const productPostStart = (state) => {
    return updateObject(state, {
        Products: null,
        error: null,
        isLoading: true,
    });
};


const productPostSuccess = (state, action) => {
    return updateObject(state, {
        Products: action.response.data.products,
        isLoading: false,
        error: null,
    });
};


const productPostFail = (state, action) => {
    return updateObject(state, {
        Products: null,
        isLoading: false,
        error: action.error.message,
    });
};




const productPatchStart = (state) => {
    return updateObject(state, {
        Products: null,
        error: null,
        isLoading: true,
    });
};


const productPatchSuccess = (state, action) => {
    return updateObject(state, {
        Products: action.response.data.products,
        isLoading: false,
        error: null,
    });
};


const productPatchFail = (state, action) => {
    return updateObject(state, {
        Products: null,
        isLoading: false,
        error: action.error.message,
    });
};


const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsTypes.PRODUCT_GET_START:
            return productGetStart(state, action);
        case ActionsTypes.PRODUCT_GET_SUCCESS:
            return productGetSuccess(state, action);
        case ActionsTypes.PRODUCT_GET_FAIL:
            return productGetFail(state, action);

        case ActionsTypes.PRODUCT_POST_START:
            return productPostStart(state, action);
        case ActionsTypes.PRODUCT_POST_SUCCESS:
            return productPostSuccess(state, action);
        case ActionsTypes.PRODUCT_POST_FAIL:
            return productPostFail(state, action);

        case ActionsTypes.PRODUCT_PATCH_START:
            return productPatchStart(state, action);
        case ActionsTypes.PRODUCT_PATCH_SUCCESS:
            return productPatchSuccess(state, action);
        case ActionsTypes.PRODUCT_PATCH_FAIL:
            return productPatchFail(state, action);

        default:
            return state;
    }
};

export default ProductReducer;

