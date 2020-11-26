import React from 'react';
import { connect } from 'react-redux';

import Dropbox from '../dropbox/dropbox.component';

import { changeTimeFrame } from '../../redux/input/input.actions';

import './time-frame-input.styles.scss';

const options = [
  'all year',
  'by month',
  'by hour',
  'time range',
  'now'
]

const TimeFrameInput = ({changeTimeFrame}) => (
  <div>
    <Dropbox name='timeframe' change={changeTimeFrame} options={options}/>
  </div>
)

const mapDispatchToProps = dispatch => ({
  changeTimeFrame: item => dispatch(changeTimeFrame(item.target.value))
})

export default connect(null, mapDispatchToProps)(TimeFrameInput);