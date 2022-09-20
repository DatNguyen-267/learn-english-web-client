import * as actionTypes from './../../constants/actionTypes'
// FETCH ALL
export const getNoteRequest = () => {
  return {
    type: actionTypes.FETCH_NOTE_REQUEST,
  }
}
export const getNoteSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_NOTE_SUCCESS,
    payload
  }
}
export const getNoteFailure = (error) => {
  return {
    type: actionTypes.FETCH_NOTE_FAILURE,
    error
  }
}

//ADD ONE NOTE
export const addNoteRequest = (payload) => {
  return {
    type: actionTypes.ADD_NOTE_REQUEST,
    payload
  }
}
export const addNoteSuccess = () => {
  return {
    type: actionTypes.ADD_NOTE_SUCCESS
  }
}
export const addNoteFailure = () => {
  return {
    type: actionTypes.ADD_NOTE_FAILURE
  }
}
//UPDATE ONE NOTE
export const updateNoteRequest = (payload) => {
  return {
    type: actionTypes.UPDATE_NOTE_REQUEST,
    payload
  }
}
export const updateNoteSuccess = () => {
  return {
    type: actionTypes.UPDATE_NOTE_SUCCESS
  }
}
export const updateNoteFailure = () => {
  return {
    type: actionTypes.UPDATE_NOTE_FAILURE
  }
}
//REMOVE ONE NOTE
export const removeNoteRequest = (payload) => {
  return {
    type: actionTypes.REMOVE_NOTE_REQUEST,
    payload
  }
}
export const removeNoteSuccess = () => {
  return {
    type: actionTypes.REMOVE_NOTE_SUCCESS
  }
}
export const removeNoteFailure = () => {
  return {
    type: actionTypes.REMOVE_NOTE_FAILURE
  }
}

// FIND ONE TOPIC
// export const findTopicGammmarRequest = (id) => {
//   return {
//     type: actionTypes.FIND_TOPIC_GRAMMAR_REQUEST,
//     id
//   }
// }
// export const findTopicGammmarSuccess = (payload) => {
//   return {
//     type: actionTypes.FIND_TOPIC_GRAMMAR_SUCCESS,
//     payload
//   }
// }
// export const findTopicGammmarFailure = (error) => {
//   return {
//     type: actionTypes.FIND_TOPIC_GRAMMAR_FAILURE,
//     error
//   }
// }

