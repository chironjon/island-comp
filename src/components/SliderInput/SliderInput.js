import React from 'react';
import './SliderInput.css';

const SliderInput = ({ sliderMonthChange, sliderHourChange }) => {
	return(
			<div>
				<input 
					 disabled 
					id="month"
					type="range"
					steps="1" 
					min="0"
					max="11"
					onInput={sliderMonthChange}
				/><br/>
		    <input 
		    	 disabled 
		    	id="hour"
		    	type="range"
		    	steps="1"
		    	min="0"
		    	max="23"
		    	onInput={sliderHourChange}
		    />
	    </div>
		);
}

export default SliderInput;