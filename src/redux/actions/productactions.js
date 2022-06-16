import { Actiontypes } from "../contants/action-types"

export const setProducts = (products) => {
    return {
        type: Actiontypes.SET_PRODUCT,
        payload :products
    }
}

export const selectedProduct = (product) => {
    return {
        type: Actiontypes.SELECTED_PRODUCT,
        payload: product
    };
};

