import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Dropbox from '../dropbox/dropbox.component';

import { changeTime, changeMonth } from '../../redux/input/input.actions';
import { selectListTime, selectHour, selectMonth } from '../../redux/input/input.selectors';

import './time-input.styles.scss'

const hours = [
  '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM',
   '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM',
    '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

const TimeInput = ({changeTime, changeMonth, listTime, hour, month}) => (
  <div className='time-input-container'>
    { 
      listTime === "by month" ?
      <Dropbox name='month' change={changeMonth} options={months}/>
      : listTime === "by hour" ?
        <div>
          <Dropbox name='month' change={changeMonth} options={months}/>
          <Dropbox name='time' change={changeTime} options={hours}/>
        </div>
      : listTime === "now" ?
      <div>{month} {hour}hr</div>
      : <span>nothing</span>
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  listTime: selectListTime,
  hour: selectHour,
  month: selectMonth
})

const mapDispatchToProps = dispatch => ({
  changeTime: item => dispatch(changeTime(item.target.value)),
  changeMonth: item => dispatch(changeMonth(item.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeInput);