import React from 'react';

import SliderInput from '../../components/SliderInput/SliderInput';
import './UserInput.css';



const UserInput = ({ onButtonPress, sliderMonthChange, sliderHourChange }) => (
			<div>
	      <p>TT'd Month:  and Time: </p>
  			<SliderInput  sliderMonthChange={sliderMonthChange} sliderHourChange={sliderHourChange}/>
  			<button onClick={onButtonPress}>RIGHT NOW</button>
			</div>
		)

export default UserInput;