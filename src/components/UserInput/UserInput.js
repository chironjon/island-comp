import React from 'react';
import NameSearch from '../../components/NameSearch/NameSearch';
import HemiInput from '../../components/HemiInput/HemiInput';
import ListTypeInput from '../../components/ListTypeInput/ListTypeInput';
import TimeInput from '../../components/TimeInput/TimeInput';
import Found from '../../components/Found/Found';
import './UserInput.scss';

const UserInput = ({ handleSearchChange, hemi, hemiChange, listType, onListChange, listTime, listTimeChange, dropMonthChange, dropHourChange, time }) => (
	<div className="userinput">
		{/*<div className="foundDonate">
			<Found />
		</div>*/}
		<div className="nameInput">
			<NameSearch handleSearchChange={handleSearchChange}/>
		</div>
		<div className="hemiinput">
			<HemiInput hemiChange={hemiChange} hemi={hemi} />
		</div>
		<div className="listinput">
			<ListTypeInput onListChange={onListChange}/>
		</div>
		<div className="time">
			<TimeInput 
				listTime={listTime} 
				listTimeChange={listTimeChange} 
				dropMonthChange={dropMonthChange} 
				dropHourChange={dropHourChange} 
				time={time}
			/>
		</div>
	</div>
)

export default UserInput;