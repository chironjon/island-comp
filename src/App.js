import React, { Component } from 'react';
import UserInput from './components/UserInput/UserInput';
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
    console.log("state on mount ", this.state)
  };
  componentDidUpdate() {

  };
  onMonthChange = (event) => {
      this.setState({ 
        time: 
          {
            ...this.state.time, 
            month: event.target.value 
          }
        }
      );
  };
  onTimeChange = (event) => {
      this.setState({ 
        time: 
          {
            ...this.state.time, 
            hour: event.target.value 
          }
        }
      );
  };
  sliderMonthChange = (event) => {
      this.setState({ 
        time: 
          {
            ...this.state.time, 
            month: months[event.target.value] 
          }
        }
      );
  };
  sliderHourChange = (event) => {
      this.setState({ 
        time: 
          {
            ...this.state.time, 
            hour: hours[event.target.value] 
          }
        }
      );
  };
  onButtonPress = (event) => {
    
  };

  onInputChange = (e) => this.setState({ time: e.target.value });
  onHemiChange = (e) => this.setState({ hemi: e.target.value });
  onListChange = (e) => this.setState({ listType: e.target.value })
  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { searchField, listType, hemi, time } = this.state;
    const listFilter = critterList.filter(critter =>
      listType === "all" ? critter : critter["Type"].includes(listType)
    )
    const searchFilter = listFilter.filter(critter =>
      critter["Name"]
        .toLowerCase()
        .includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <div className="App-title">
          <h1>ACNH Critter Lookup</h1>
        </div>
        <div className="Content">
          <div className="inputs">
            <div className="hemiBoxes">
            Working ==>
              <input 
                type="radio" 
                id="NH" 
                name="hemi" 
                value="NH" 
                checked={hemi === 'NH'} 
                onChange={this.onHemiChange}
              />
              <label htmlFor="NH">North</label>
              <input 
                type="radio" 
                id="SH" 
                name="hemi" 
                value="SH" 
                checked={hemi === 'SH'} 
                onChange={this.onHemiChange}
              />
              <label htmlFor="SH">South</label>
            </div>
            <div className="listBoxes">
             Working ==>
              <input 
                type="radio" 
                id="all" 
                name="critters" 
                value="all" 
                checked={listType === 'all'} 
                onChange={this.onListChange}
              />
              <label htmlFor="all">All</label>
              <input
                type="radio" 
                id="insect" 
                name="critters" 
                value="insect" 
                checked={listType === 'insect'} 
                onChange={this.onListChange}
              />
              <label htmlFor="insects">Insects</label>
              <input
                type="radio" 
                id="fish" 
                name="critters" 
                value="fish" 
                checked={listType === 'fish'} 
                onChange={this.onListChange}
              />
              <label htmlFor="fish">Fish</label>
              <input
                type="radio" 
                id="sea" 
                name="critters" 
                value="sea" 
                checked={listType === 'sea'} 
                onChange={this.onListChange}
              />
              <label htmlFor="seaCreatures">Sea Creatures</label>
            </div>{/*fixing up button functions*/}
            <div className="searchBox">
             Working ==>
              <input 
                type="text" 
                placeholder="search by name" 
                onChange={this.handleChange}
              />
            </div>
            <UserInput 
              onButtonPress={this.onButtonPress} 
              sliderMonthChange={this.sliderMonthChange} 
              sliderHourChange={this.sliderHourChange}
            />
          </div>
          <CardList 
            hemi={hemi} 
            time={time} 
            critters={searchFilter}
          />
        </div>
      </div>
    );
  }
}

export default App;
