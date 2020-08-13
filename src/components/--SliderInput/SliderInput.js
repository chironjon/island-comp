import React from 'react';
import './SliderInput.scss';

const SliderInput = ({ dropMonthChange, dropHourChange, listTime }) => {
  return(
    <div className="dropMenu">
      <div className="labels">
        { listTime === "month"
          ? <div><label htmlFor="month">Month: </label></div>
          : listTime === "hour" &&
            <div>
              <label htmlFor="month">Month: </label><br/>
              <label htmlFor="hour">Hour: </label>
            </div>
        }
      </div>
      <div className="drops">
        { listTime === "month"
          ? <div>
              <select name="month" id="monthDrop" onChange={dropMonthChange}>
                <option>Pick</option>
                <option value='0'>Jan</option>
                <option value='1'>Feb</option>
                <option value='2'>Mar</option>
                <option value='3'>Apr</option>
                <option value='4'>May</option>
                <option value='5'>Jun</option>
                <option value='6'>Jul</option>
                <option value='7'>Aug</option>
                <option value='8'>Sep</option>
                <option value='9'>Oct</option>
                <option value='10'>Nov</option>
                <option value='11'>Dec</option>
              </select>
            </div>
            : listTime === "hour" &&
            <div>
              <select name="month" id="monthDrop" onChange={dropMonthChange}>
                <option>Pick</option>
                <option value='0'>Jan</option>
                <option value='1'>Feb</option>
                <option value='2'>Mar</option>
                <option value='3'>Apr</option>
                <option value='4'>May</option>
                <option value='5'>Jun</option>
                <option value='6'>Jul</option>
                <option value='7'>Aug</option>
                <option value='8'>Sep</option>
                <option value='9'>Oct</option>
                <option value='10'>Nov</option>
                <option value='11'>Dec</option>
              </select><br/>
              <select name="hour" id="hourDrop" onChange={dropHourChange}>
                <option>Pick</option>
                <option value='0'>12 am</option>
                <option value='1'>1 am</option>
                <option value='2'>2 am</option>
                <option value='3'>3 am</option>
                <option value='4'>4 am</option>
                <option value='5'>5 am</option>
                <option value='6'>6 am</option>
                <option value='7'>7 am</option>
                <option value='8'>8 am</option>
                <option value='9'>9 am</option>
                <option value='10'>10 am</option>
                <option value='11'>11 am</option>
                <option value='12'>12 pm</option>
                <option value='13'>1 pm</option>
                <option value='14'>2 pm</option>
                <option value='15'>3 pm</option>
                <option value='16'>4 pm</option>
                <option value='17'>5 pm</option>
                <option value='18'>6 pm</option>
                <option value='19'>7 pm</option>
                <option value='20'>8 pm</option>
                <option value='21'>9 pm</option>
                <option value='22'>10 pm</option>
                <option value='23'>11 pm</option>
              </select>
            </div>
        }
      </div>
    </div>
  );
}

export default SliderInput;

