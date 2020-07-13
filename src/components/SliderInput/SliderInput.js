import React from 'react';
import './SliderInput.css';

const SliderInput = ({ sliderMonthChange, sliderHourChange, listTime }) => {
  return(
      <div>
        <label>Month:</label>
        <input 
          disabled={listTime === "now" || listTime === "year"}
          id="month"
          type="range"
          steps="1" 
          min="0"
          max="11"
          onInput={sliderMonthChange}
        /><br/>
        <label>Hour:</label>
        <input 
          disabled={listTime !== "hour"} 
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

