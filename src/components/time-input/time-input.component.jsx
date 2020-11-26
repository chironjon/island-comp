import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Dropbox from '../dropbox/dropbox.component';

import { changeTime, changeSecondTime, changeMonth } from '../../redux/input/input.actions';
import { resetTimeInput } from '../../redux/input/input.actions'
import { selectListTime, selectHour, selectSecondHour, selectMonth } from '../../redux/input/input.selectors';

import './time-input.styles.scss'

const hours = [
  '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM',
   '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM',
    '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
const TimeInput = ({changeTime, changeMonth, changeSecondTime, secondHour, resetTimeInput, listTime, hour, month}) => {
  console.log(hours.slice(hours.indexOf(hour)))
  return (
  <div className='time-input-container'>
    { 
      listTime === "by month" ?
        <div>
          <label forhtml="month">Month: </label>
          <Dropbox name='month' change={changeMonth} options={months}/>
          <p>{month}</p>
        </div>
      : listTime === "by hour" ?
        <div>
          <label forhtml="month">Month: </label>
          <Dropbox name='month' change={changeMonth} options={months}/>
        <br/>
          <label forhtml="hour">Hour: </label> 
          <Dropbox name='time' change={changeTime} options={hours}/>
          <p>{hour} in {month}</p>
        </div>
      : listTime === "now" ?
        <div>
          <p>Now: {hour} in {month}</p>
        </div>
      : listTime === "time range" ?
        <div className='time-range-container'>
          <div className='time-display'>
            <p>from {hour} to {secondHour} in {month}</p>
          </div>
          <div className='month-container'>
            <label forhtml="month">Month: </label>
            <Dropbox name='month' change={changeMonth} options={months}/>
          </div>
          <div className='time-container'>
            <div className='first-hour-container'>
              <label forhtml="hour">1st Hour: </label> 
              <Dropbox name='hour' change={changeTime} options={hours}/>
            </div>
            <div className='second-hour-container'>
              <label forhtml="secondHour">2nd Hour: </label> 
              <Dropbox name='secondHour' change={changeSecondTime} options={hours.slice(hours.indexOf(hour))}/>
            </div>
          </div>
        </div>
      : <span>All year</span>
    }
  </div>
)}

const mapStateToProps = createStructuredSelector({
  listTime: selectListTime,
  hour: selectHour,
  secondHour: selectSecondHour,
  month: selectMonth
})

const mapDispatchToProps = dispatch => ({
  changeTime: item => dispatch(changeTime(item.target.value)),
  changeSecondTime: item => dispatch(changeSecondTime(item.target.value)),
  changeMonth: item => dispatch(changeMonth(item.target.value)),
  resetTimeInput: () => dispatch(resetTimeInput())
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeInput);