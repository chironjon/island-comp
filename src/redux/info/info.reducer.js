import InfoActionTypes from './info.types';

const INITIAL_STATE = {
  hidden: true,
  currentInfoItem: []
};

const infoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InfoActionTypes.TOGGLE_INFO_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case InfoActionTypes.ADD_ITEM:
      return {
        ...state,
        currentInfoItem: [action.payload]
      }
    case InfoActionTypes.REMOVE_ITEM:
      return {
        state: INITIAL_STATE
      }
      default:
        return state;
  }
}

export default infoReducer;