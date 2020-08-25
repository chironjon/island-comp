import InputActionTypes from './input.types';

const hours = [
  '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM',
   '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM',
    '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
let today = new Date();
let curMon = today.getMonth();
let curTime = today.getHours();

const INITIAL_STATE = {
  listType: 'all',
  listTime: 'all year',
  searchField: '',
  month: months[curMon],
  hour: hours[curTime],
  hemi: 'NH',
  sortBy: '(pick)',
  order: 'desc'
};

const inputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InputActionTypes.HEMI_CHANGE:
      return {
        ...state,
        hemi: action.payload
      }
    case InputActionTypes.SEARCH_CHANGE:
      return {
        ...state,
        searchField: action.payload
      }
    case InputActionTypes.LIST_CHANGE:
      return {
        ...state,
        listType: action.payload
      }
    case InputActionTypes.TIME_CHANGE:
      return {
        ...state,
        hour: action.payload
      }
    case InputActionTypes.MONTH_CHANGE:
      return {
        ...state,
        month: action.payload
      }
    case InputActionTypes.SORT_CHANGE:
      return {
        ...state,
        sortBy: action.payload
      }
    case InputActionTypes.ORDER_CHANGE:
      return {
        ...state,
        order: action.payload
      }
    case InputActionTypes.TIME_FRAME_CHANGE:
      if (state.listTime === "now"){
        return {
          ...state,
          listTime: action.payload
        }
      } else {
        return {
          ...state,
          listTime: action.payload,
          month: months[curMon],
          hour: hours[curTime]
        }
      }
    case InputActionTypes.RESET_TIME_INPUT:
      return {
        state
      }
    default:
      return state;
  }
}

export default inputReducer;