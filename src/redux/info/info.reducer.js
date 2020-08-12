import InfoActionTypes from './info.types';

const INITIAL_STATE = {
  hidden: true
};

const infoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InfoActionTypes.TOGGLE_INFO_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
      default:
        return state;
  }
}

export default infoReducer;