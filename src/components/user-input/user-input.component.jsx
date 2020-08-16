import React from 'react';

import ListSearchInput from '../list-search-input/list-search-input.component';
import HemiInput from '../hemi-input/hemi-input.component';
import ListTypeInput from '../list-type-input/list-type-input.component';
import TimeInput from '../time-input/time-input.component';
import SortInput from '../sort-input/sort-input.component';
import OrderInput from '../order-input/order-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './user-input.styles.scss';

const hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
let today = new Date();
let curMon = today.getMonth();
let curTime = today.getHours();

const initialState = {
  listType: 'all',
  listTime: 'year',
  searchField: '',
  time: {
    month: months[curMon],
    hour: hours[curTime]
  },
  hemi: 'NH',
  sortBy: {
    char: 'list',
    order: 'des'
  }
}

class UserInput extends React.Component {
  constructor(props){
    super(props);
    
    this.state = initialState;
  }

  render() {
    return (
      <div className='input-container'>
        <div className='search-container'>
          <ListSearchInput />
        </div>
        <div className='detail-container'>
          <HemiInput />
          <ListTypeInput />
          <TimeInput />
        </div>
        <div className='sort-order-container'>
          <SortInput />
          <OrderInput />
        </div>
        <div className='reset-button-container'>
          <CustomButton>RESET</CustomButton>
        </div>
      </div>
    )
  }
}

export default UserInput;