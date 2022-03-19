import * as actionTypes from "../../constants/actionTypes";

export const loading_request = () => {
    return {
        type: actionTypes.LOADING_REQUEST,
    }
}
export const loading = () => {
    return {
        type: actionTypes.LOADING,
    }
}
export const unloading = () => {
    return {
        type: actionTypes.UNLOADING,
    }
}
