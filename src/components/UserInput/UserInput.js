import React from 'react';

import SliderInput from '../../components/SliderInput/SliderInput';
import './UserInput.css';

const UserInput = ({ onButtonPress, sliderMonthChange, sliderHourChange, time }) => (
			<div>
	      ↓↓↓Working↓↓↓<p>Month: {time.month} and Hour: {time.hour}</p>
  			↓↓↓Mostly Working↓↓↓<SliderInput  sliderMonthChange={sliderMonthChange} sliderHourChange={sliderHourChange} time={time}/>
  			Working ==><button onClick={onButtonPress}>RIGHT NOW</button>Doesn't update after pressing "RIGHT NOW"
			</div>
		)

export default UserInput;