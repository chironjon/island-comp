import React, { Component } from 'react';
import UserInput from './components/UserInput/UserInput';
import critters from './components/critters';
import CardList from './components/CardList/CardList';

import './App.css';

const critterList = critters.map((item) => item);
const hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
let today = new Date();
let curMon = today.getMonth();
let curTime = today.getHours();
const initialState = {
  critterArr: critterList,
  listType: 'all',
  listTime: 'year',
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
  listTimeChange = (e) => this.setState({ listTime: e.target.value })
  onHemiChange = (e) => this.setState({ hemi: e.target.value });
  onListChange = (e) => this.setState({ listType: e.target.value })
  handleSearchChange = (e) => this.setState({ searchField: e.target.value });
  resetTime = () => {
    this.setState({ time: { month: months[curMon], hour: hours[curTime]}})
  }
  render() {
    const { searchField, listType, listTime, hemi, time } = this.state;
    // blank = all, search by name
    const searchFilter = critterList.filter(critter =>
      critter["Name"]
        .toLowerCase()
        .includes(searchField.toLowerCase())
    )
    // which type of critter?
    const listFilter = searchFilter.filter(critter =>
      listType === "all" ? critter : critter["Type"].includes(listType)
    )
    // all year? by month? by hour? now?
    const monthCheck = hemi + " " + time.month
    const monthsFilter = listFilter.filter(critter =>
      listTime === "year" ? critter : critter[monthCheck] !== "NA"
    )
    const hoursFilter = monthsFilter.filter(critter =>
      listTime === "hour" ? critter[time.hour] === "TRUE" : critter
    )
    const nowFilter = hoursFilter.filter(critter =>
      listTime === "now" ? critter[time.hour] === "TRUE" : critter
    )
    

    return (
      <div className="App">
        <div className="App-title">
          <h1>ACNH Critter Lookup</h1>
        </div>
        <div className="Content">
          <UserInput 
            hemiChange={this.onHemiChange}
            handleSearchChange={this.handleSearchChange}
            listType={listType}
            onListChange={this.onListChange}
            sliderMonthChange={this.sliderMonthChange} 
            sliderHourChange={this.sliderHourChange}
            listTime={listTime}
            listTimeChange={this.listTimeChange}
            resetTime={this.resetTime}
            time={time}
            hemi={hemi}
          />
          <CardList 
            hemi={hemi} 
            critters={nowFilter}
          />
        </div>
      </div>
    );
  }
}

export default App;
