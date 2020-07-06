import React from 'react';

import SliderInput from '../../components/SliderInput/SliderInput';
import './TimeInput.css';



const TimeInput = ({ onChange, onPress, onMonthChange, onTimeChange }) => (
			<div>
				<button onButtonPress={onPress}>RIGHT NOW</button>
		        <p>TT'd Month:  and Time: </p>
    			<SliderInput  slideChangeMonth={onMonthChange} slideChangeTime={onTimeChange}/>
			</div>
		)

export default TimeInput;