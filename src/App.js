import React, { Component } from 'react';
import TimeInput from './components/TimeInput/TimeInput';
import critters from './components/critters'
import insects from './components/insects';
import fish from './components/fish';
import seaCreatures from './components/seaCreatures';
import CardList from './components/CardList/CardList';

import './App.css';
const critterList = critters.map((item) => item);
const insectList = insects.map((item) => item);
const fishList = fish.map((item) => item);
const seaCreatureList = seaCreatures.map((item) => item);
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
  inputMonth: months[curMon],
  inputTime: hours[curTime],
  insectArr: insectList,
  fishArr: fishList,
  seaCritterArr: seaCreatureList,
  critterArr: critterList,
  listType: '',
  textInput: '',
  time: ''
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }
  componentDidMount() {

  }
  onMonthChange = (event) => {
      this.setState({inputMonth: months[event.target.value]});
    }

  onTimeChange = (event) => {
      this.setState({inputTime: hours[event.target.value]});
  }

  onButtonPress = () => {
    console.log("poop")
    this.setState(initialState)
  }
  onInputChange = (event) => {
    console.log(this.state.time)
    this.setState({time: event.target.value});
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <TimeInput onChange={this.onInputChange} onPress={this.onButtonPress} onMonthChange={this.onMonthChange} onTimeChange={this.onTimeChange}/>
          <CardList time={this.state.time} critters={this.state.critterArr}/>
          {/*<CardList time={this.state.time} critters={this.state.fishArr}/>
          <CardList time={this.state.time} critters={this.state.seaCritterArr}/>*/}
        </div>
      </div>
    );
  }
}

export default App;
