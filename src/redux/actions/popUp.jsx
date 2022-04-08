import * as actionTypes from "../../constants/actionTypes";

export const turn_on_popup_login = () => {
    return {
        type: actionTypes.TURN_ON_POPUP_LOGIN,
    }
}
export const turn_off_popup_login = () => {
    return {
        type: actionTypes.TURN_OFF_POPUP_LOGIN,
    }
}
