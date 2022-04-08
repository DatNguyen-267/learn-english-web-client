import * as actionTypes from "../../constants/actionTypes";

export const get_user_voca_process = (payload) => {
  return {
    type: actionTypes.GET_USER_VOCA_PROCESS,
    payload,
  }
}
