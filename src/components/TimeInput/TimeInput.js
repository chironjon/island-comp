import React from 'react';
import SliderInput from '../../components/SliderInput/SliderInput';
import './TimeInput.css';

const TimeInput = ({ resetTime, listTimeChange, listTime, time, sliderMonthChange, sliderHourChange }) => (
	<div className="time">
		<div className="timeRadios">
			<div>
				<input 
        	type="radio" 
        	id="year" 
        	name="time" 
        	value="year"
        	onChange={listTimeChange}
        	checked={listTime === 'year'}
      	/>
      	<label>
					All year
				</label>
			</div>
			<div>
				<input 
        	type="radio" 
        	id="month" 
        	name="time" 
        	value="month" 
        	onChange={listTimeChange}
        	checked={listTime === 'month'}
      	/>
      	<label>
					By Month
				</label>
			</div>
			<div>
				<input 
        	type="radio" 
        	id="hour" 
        	name="time" 
        	value="hour"
        	onChange={listTimeChange}
        	checked={listTime === 'hour'} 
      	/>
      	<label>
					By Hour
				</label>
			</div>
			<div>
				<input 
          type="radio" 
          id="now" 
          name="time" 
          value="now"
          onChange={listTimeChange}
          onClick={resetTime}
          checked={listTime === 'now'} 
        />
	      <label>NOW</label>
      </div>
    </div>
		<div className="sliders">
      <p>Hour {time.hour} of a lovely day in {time.month}.</p>
			<SliderInput 
				sliderMonthChange={sliderMonthChange} 
				sliderHourChange={sliderHourChange} 
				listTime={listTime}
			/>
		</div>
	</div>
)

export default TimeInput;