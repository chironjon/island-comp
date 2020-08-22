import InputActionTypes from './input.types';

const hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
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
  sortBy: 'name',
  order: 'inc'
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
      return {
        ...state,
        listTime: action.payload
      }
    default:
      return state;
  }
}

export default inputReducer;