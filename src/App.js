import React, { Component } from 'react';
import TimeInput from './components/TimeInput/TimeInput';
import critters from './components/critters';
import CardList from './components/CardList/CardList';

import './App.css';

const critterList = critters.map((item) => item);
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
const hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
let today = new Date();
let curMon = today.getMonth();
let curTime = today.getHours();
const initialState = {
  critterArr: critterList,
  listType: 'all',
  searchField: '',
  time: {
    month: months[curMon],
    hour: hours[curTime]
  },
  hemi: 'NH'
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  };
  componentDidMount() {
    console.log(this.state)
  };
  componentDidUpdate() {

  };
  onMonthChange = (event) => {
      this.setState({ time: {...this.state.time, month: event.target.value }});
  };

  onTimeChange = (event) => {
      this.setState({ time: {...this.state.time, hour: event.target.value }});
  };
  sliderMonthChange = (event) => {
      this.setState({ time: {...this.state.time, month: months[event.target.value] }});
  };
  sliderHourChange = (event) => {
      this.setState({ time: {...this.state.time, hour: hours[event.target.value] }});
  };
  onButtonPress = (event) => {
    
  };

  onInputChange = (event) => this.setState({ time: event.target.value });
  onListChange = (e) => this.setState({ hemi: e.target.value });
  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { searchField, listType, hemi, time } = this.state;
    // const hemiFilter = critterList.filter(critter =>
    //   critter["hemi"] === 
    // )
    const searchFilter = critterList.filter(critter =>
      critter["Name"].toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <div className="App-header">
          <div className="inputs">
            <div className="hemiBoxes">
              <input type="radio" id="NH" name="hemi" value="NH" checked={hemi === 'NH'} onChange={this.onListChange}/>
              <label htmlFor="NH">North</label>
              <input /*disabled*/ type="radio" id="SH" name="hemi" value="SH" checked={hemi === 'SH'} onChange={(e) => this.setState({ hemi: e.target.value })}/>
              <label htmlFor="SH">South</label>
            </div>
            <div className="listBoxes">
              <input type="radio" id="all" name="critters" value="all" checked={listType === 'all'} onChange={(e) => this.setState({ listType: e.target.value })}/>
              <label htmlFor="all">All</label>
              <input /*disabled*/ type="radio" id="insects" name="critters" value="insects" checked={listType === 'insects'} onChange={(e) => this.setState({ listType: e.target.value })}/>
              <label htmlFor="insects">Insects</label>
              <input /*disabled*/ type="radio" id="fish" name="critters" value="fish" checked={listType === 'fish'} onChange={(e) => this.setState({ listType: e.target.value })}/>
              <label htmlFor="fish">Fish</label>
              <input /*disabled*/ type="radio" id="seaCreatures" name="critters" value="seaCreatures" checked={listType === 'seaCreatures'} onChange={(e) => this.setState({ listType: e.target.value })}/>
              <label htmlFor="seaCreatures">Sea Creatures</label>
            </div>{/*fixing up button functions*/}
            <div className="searchBox">
              <input type="text" placeholder="search by name" onChange={this.handleChange}/>
            </div>
            <TimeInput onButtonPress={this.onButtonPress} sliderMonthChange={this.sliderMonthChange} sliderHourChange={this.sliderHourChange}/>
          </div>
          <CardList hemi={hemi} time={time} critters={searchFilter}/>
        </div>
      </div>
    );
  }
}

export default App;
