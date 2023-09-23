import * as ActionsTypes from '../../../common/state/StatesConstants';

export const productGetStart = (request) => ({
    type: ActionsTypes.PRODUCT_GET_START,
    request,
});

export const productGetSuccess = (response) => ({
    type: ActionsTypes.PRODUCT_GET_SUCCESS,
    response,
});

export const productGetFail = (error) => ({
    type: ActionsTypes.PRODUCT_GET_FAIL,
    error,
});


export const productPostStart = (request) => ({
    type: ActionsTypes.PRODUCT_POST_START,
    request,
});

export const productPostSuccess = (response) => ({
    type: ActionsTypes.PRODUCT_POST_SUCCESS,
    response,
});

export const productPostFail = (error) => ({
    type: ActionsTypes.PRODUCT_POST_FAIL,
    error,
});


export const productPatchStart = (request) => (

    console.log("test"),
    {
        type: ActionsTypes.PRODUCT_PATCH_START,
        request,
    });

export const productPatchSuccess = (response) => ({
    type: ActionsTypes.PRODUCT_PATCH_SUCCESS,
    response,
});

export const productPatchFail = (error) => ({
    type: ActionsTypes.PRODUCT_PATCH_FAIL,
    error,
});