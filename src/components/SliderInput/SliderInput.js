import React from 'react';
import './SliderInput.css';

const SliderInput = ({ slideChangeMonth, slideChangeTime }) => {
	return(
			<div>
				<input 
					disabled 
					id="month"
					type="range"
					steps="1" 
					min="0"
					max="11"
					onInput={slideChangeMonth}
				/><br/>
		    <input 
		    	disabled 
		    	id="hour"
		    	type="range"
		    	steps="1"
		    	min="0"
		    	max="23"
		    	onInput={slideChangeTime}
		    />
	    </div>
		);
}

export default SliderInput;