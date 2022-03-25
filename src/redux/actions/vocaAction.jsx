import * as actionTypes from '../../constants/actionTypes'
// FETCH
export const getAllVocaSuccess = (payload) => 
{return {type: actionTypes.GET_ALL_VOCA_SUCCESS,payload}}

export const getAllVocaFailure = (error) => 
{ return {type: actionTypes.GET_ALL_VOCA_FAILURE,error}}

export const getVocaFailure = (error) => 
{ return { type: actionTypes.GET_VOCA_FAILURE, error }}

export const getVocaSuccess = (payload) => 
{ return { type: actionTypes.GET_VOCA_SUCCESS, payload }}

export const getTopicSuccess = (payload) => 
{
  return { type: actionTypes.GET_TOPIC_SUCCESS, payload}
}
export const updateTopicSuccess = (payload) => 
{
  return { type: actionTypes.UPDATE_TOPIC_SUCCESS, payload}
}