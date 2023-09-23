import { instance } from "../Axios";

export const ProductGetApi = async (payload) => {
    return instance
        .get(`/product/get/${payload.budgetId}`)
        .then((response) => {
            return response;
        })
};


export const ProductPostApi = async (payload) => {
    return instance
        .post(`/product/create/`, payload.product)
        .then((response) => {
            return response;
        })
};



export const ProductPatchApi = async (payload) => {
    return instance
        .patch(`/product/update/${payload.product_id}`, payload.product)
        .then((response) => {
            return response;
        })
};
