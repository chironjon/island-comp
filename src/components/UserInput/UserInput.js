import React from 'react';
import NameSearch from '../../components/NameSearch/NameSearch';
import HemiInput from '../../components/HemiInput/HemiInput';
import ListTypeInput from '../../components/ListTypeInput/ListTypeInput';
import TimeInput from '../../components/TimeInput/TimeInput';
import './UserInput.css';

const UserInput = ({ handleSearchChange, hemi, hemiChange, listType, onListChange, resetTime, listTime, listTimeChange, sliderMonthChange, sliderHourChange, time }) => (
	<div className="userinput">
		<div className="nameInput">
			<NameSearch handleSearchChange={handleSearchChange}/>
		</div>
		<div className="hemiinput">
			<HemiInput hemiChange={hemiChange} hemi={hemi} />
		</div>
		<div className="listinput">
			<ListTypeInput listType={listType} onListChange={onListChange}/>
		</div>
		<div className="time">
			<TimeInput 
				resetTime={resetTime} 
				listTime={listTime} 
				listTimeChange={listTimeChange} 
				sliderMonthChange={sliderMonthChange} 
				sliderHourChange={sliderHourChange} 
				time={time}
			/>
		</div>
	</div>
)

export default UserInput;