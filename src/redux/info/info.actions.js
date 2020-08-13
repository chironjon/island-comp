import InfoActionTypes from './info.types';

export const toggleInfoHidden = () => ({
  type: InfoActionTypes.TOGGLE_INFO_HIDDEN
})

export const addItemInfo = item => ({
  type: InfoActionTypes.ADD_ITEM,
  payload: item
})

export const removeItemInfo = () => ({
  type: InfoActionTypes.REMOVE_ITEM
})