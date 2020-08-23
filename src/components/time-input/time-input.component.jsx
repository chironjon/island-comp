import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Dropbox from '../dropbox/dropbox.component';

import { changeTime, changeMonth } from '../../redux/input/input.actions';
import { selectListTime, selectHour, selectMonth } from '../../redux/input/input.selectors';

import './time-input.styles.scss'

const hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
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