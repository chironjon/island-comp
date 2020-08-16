import React from 'react';

import Dropbox from '../dropbox/dropbox.component';

import './time-input.styles.scss'

const options = [
  '12am',
  '1am',
  '2am',
  '3am',
  '4am',
  '5am',
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
  '9pm',
  '10pm',
  '11pm'
  ]

function timeChange (e) {
  console.log(e.target.value);
  return null;
}

const TimeInput = (props) => (
  <Dropbox name='time' change={timeChange} options={options}/>
)

export default TimeInput;