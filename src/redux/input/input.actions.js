import InputActionTypes from './input.types';

export const changeHemi = item => ({
  type: InputActionTypes.HEMI_CHANGE,
  payload: item
})

export const changeSearchField = item => ({
  type: InputActionTypes.SEARCH_CHANGE,
  payload: item
})
export const changeListType = item => ({
  type: InputActionTypes.LIST_CHANGE,
  payload: item
})
export const changeTime = item => ({
  type: InputActionTypes.TIME_CHANGE,
  payload: item
})
export const changeMonth = item => ({
  type: InputActionTypes.MONTH_CHANGE,
  payload: item
})
export const changeSort = item => ({
  type: InputActionTypes.SORT_CHANGE,
  payload: item
})
export const changeOrder = item => ({
  type: InputActionTypes.ORDER_CHANGE,
  payload: item
})
export const changeTimeFrame = item => ({
  type: InputActionTypes.TIME_FRAME_CHANGE,
  payload: item
})