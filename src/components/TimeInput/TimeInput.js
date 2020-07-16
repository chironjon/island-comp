import React from 'react';
import SliderInput from '../../components/SliderInput/SliderInput';
import './TimeInput.scss';

const TimeInput = ({ listTimeChange, listTime, time, dropMonthChange, dropHourChange }) => (
	<div className="timeinput">
    <div className="timeSelect">
      <label htmlFor="timeDrop">Time Frame: </label>
      <select name="timeDrop" id="timeDrop" onChange={listTimeChange}>
        <option value="year">All Year</option>
        <option value="month">By Month</option>
        <option value="hour">By Hour</option>
        <option value="now">Now</option>
      </select>
    </div>
		<div className="sliders">
      <div>{listTime === "year" || listTime === "month" ? <span></span> : <span>Hour {time.hour} in </span>}{listTime === "year" ? <span></span> : <span>{time.month}</span>}</div>
			<SliderInput 
				dropMonthChange={dropMonthChange} 
				dropHourChange={dropHourChange} 
				listTime={listTime}
			/>
		</div>
	</div>
)

export default TimeInput;