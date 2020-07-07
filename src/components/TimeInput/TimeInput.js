import React from 'react';

import SliderInput from '../../components/SliderInput/SliderInput';
import './TimeInput.css';



const TimeInput = ({ onChange, onPress, onMonthChange, onTimeChange }) => (
			<div>
				<button onPress={onPress}>RIGHT NOW</button>
	      <p>TT'd Month:  and Time: </p>
  			<SliderInput  slideChangeMonth={onMonthChange} slideChangeTime={onTimeChange}/>
  			<form className="listBoxes">

    			<input type="radio" id="all" name="critters" value="all"/>
					<label for="all">All</label>
					<input type="radio" id="insects" name="critters" value="insects"/>
					<label for="insects">Insects</label>
					<input type="radio" id="fish" name="critters" value="fish"/>
					<label for="fish">Fish</label>
					<input type="radio" id="seaCreatures" name="critters" value="seaCreatures"/>
					<label for="seaCreatures">Sea Creatures</label>
    		</form>
	    	<input type="text"/>
			</div>
		)

export default TimeInput;