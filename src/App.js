import React, { Component } from 'react';
import TimeInput from './components/TimeInput/TimeInput';
import critters from './components/critters';
import CardList from './components/CardList/CardList';

import './App.css';

const critterList = critters.map((item) => item);

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
  critterArr: critterList,
  listType: 'all',
  searchField: '',
  time: {
    month: curTime,
    hour: curMon
  },
  hemi: 'NH'
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
  };
  componentDidMount() {
    console.log(this.state)
  };
  componentDidUpdate() {

  };
  onMonthChange = (event) => {
      this.setState({inputMonth: months[event.target.value]});
  };

  onTimeChange = (event) => {
      this.setState({inputTime: hours[event.target.value]});
  };

  onButtonPress = (event) => {
    console.log("poop")
    console.log(this.state)
  };
  onInputChange = (event) => this.setState({time: event.target.value});
  onListChange = (e) => this.setState({ hemi: e.target.value });
  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { searchField, listType, hemi } = this.state;
    const filteredCritters = critterList.filter(critter =>
      critter["Name"].toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <div className="App-header">
          <div className="inputs">
            <div className="hemiBoxes">
              <input type="radio" id="NH" name="hemi" value="NH" checked={hemi === 'NH'} onChange={this.onListChange}/>
              <label htmlFor="NH">North</label>
              <input disabled type="radio" id="SH" name="hemi" value="SH" checked={hemi === 'SH'} onChange={(e) => this.setState({ hemi: e.target.value })}/>
              <label htmlFor="SH">South</label>
            </div>
            <div className="listBoxes">
              <input type="radio" id="all" name="critters" value="all" checked={listType === 'all'} onChange={(e) => this.setState({ listType: e.target.value })}/>
              <label htmlFor="all">All</label>
              <input disabled type="radio" id="insects" name="critters" value="insects" checked={listType === 'insects'} onChange={(e) => this.setState({ listType: e.target.value })}/>
              <label htmlFor="insects">Insects</label>
              <input disabled type="radio" id="fish" name="critters" value="fish" checked={listType === 'fish'} onChange={(e) => this.setState({ listType: e.target.value })}/>
              <label htmlFor="fish">Fish</label>
              <input disabled type="radio" id="seaCreatures" name="critters" value="seaCreatures" checked={listType === 'seaCreatures'} onChange={(e) => this.setState({ listType: e.target.value })}/>
              <label htmlFor="seaCreatures">Sea Creatures</label>
            </div>{/*fixing up button functions*/}
            <div className="searchBox">
              <input type="text" placeholder="search by name" onChange={this.handleChange}/>
            </div>
            <TimeInput onButtonPress={this.onButtonPress} onMonthChange={this.onMonthChange} onTimeChange={this.onTimeChange}/>
          </div>
          <CardList hemi={hemi} time={this.state.time} critters={filteredCritters}/>
        </div>
      </div>
    );
  }
}

export default App;
