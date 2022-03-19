import * as actionTypes from "../../constants/actionTypes";

export const get_user = (payload) => {
    return {
        type: actionTypes.GET_USER,
        payload,
    }
}
