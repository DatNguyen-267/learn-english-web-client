import * as actionTypes from "../../constants/actionTypes";

export const onLoading = () => {
    return {
        type: actionTypes.ONLOADING,
    }
}
export const unLoadingRequest = () => {
    return {
        type: actionTypes.UNLOADING_REQUEST,
    }
}
export const unLoadingSuccess = () => {
    return {
        type: actionTypes.UNLOADING_SUCCESS,
    }
}
