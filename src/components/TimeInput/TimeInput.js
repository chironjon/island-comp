import React, { Component } from 'react';
import SliderInput from '../../components/SliderInput/SliderInput';
import './TimeInput.css';

const months = [
	"JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" 
];
const hours = [
	"00hr", "01hr", "02hr", "03hr", "04hr", "05hr", "06hr", "07hr", "08hr", "09hr", "10hr", "11hr", "12hr", "13hr", "14hr", "15hr", "16hr", "17hr", "18hr", "19hr", "20hr", "21hr", "22hr", "23hr"
];
let today = new Date();
let curMon = today.getMonth();
let curTime = today.getHours();
const initialState = {
  inputMonth: curMon,
  inputTime: curTime
}

class TimeInput extends Component {
	constructor() {
		super();
    	this.state = initialState
	}

	onMonthChange = (event) => {
    	this.setState({inputMonth: event.target.value});
  	}

	onTimeChange = (event) => {
	    this.setState({inputTime: event.target.value});
	}

	onButtonPress = () => {
		console.log(this.state)
		this.setState(initialState)
	}

	render() {
	    const { inputMonth, inputTime } = this.state
	    
		return(
			<div>
				<button onClick={this.onButtonPress}>RIGHT NOW</button>
		        <p>TT'd Month: {months[inputMonth]} and Time: {hours[inputTime]}</p>
    			<SliderInput slideChangeMonth={this.onMonthChange} slideChangeTime={this.onTimeChange} />
			</div>
		)
	}
}

export default TimeInput;