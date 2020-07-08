import React from 'react';

import SliderInput from '../../components/SliderInput/SliderInput';
import './TimeInput.css';



const TimeInput = ({ onButtonPress, onMonthChange, onTimeChange }) => (
			<div>
	      <p>TT'd Month:  and Time: </p>
  			<SliderInput  slideChangeMonth={onMonthChange} slideChangeTime={onTimeChange}/>
  			<button onClick={onButtonPress}>RIGHT NOW</button>
			</div>
		)

export default TimeInput;