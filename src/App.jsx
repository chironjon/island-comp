import React, { Component } from 'react';
import UserInput from './components/UserInput/UserInput';
import SortingInput from './components/SortingInput/SortingInput'
import CardList from './components/CardList/CardList';
import critters from './components/critters';

import './App.scss';

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
  hemi: 'NH',
  sortBy: {
    char: 'list',
    order: 'des'
  }
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
  dropMonthChange = (event) => {
      this.setState({ 
        time: 
          {
            ...this.state.time, 
            month: months[event.target.value]
          }
        }
      );
  };
  dropHourChange = (event) => {
      this.setState({ 
        time: 
          {
            ...this.state.time, 
            hour: hours[event.target.value]
          }
        }
      );
  };
  listTimeChange = (e) => {
    this.setState({ listTime: e.target.value })
    if (e.target.value === "now"){
      this.setState({ time: { month: months[curMon], hour: hours[curTime]}})
    }
  }
  sortCharChange = (e) => this.setState({ sortBy: { ...this.state.sortBy, char: e.target.value} })
  sortOrderChange = (e) => this.setState({ sortBy: { ...this.state.sortBy, order: e.target.value} })
  onHemiChange = (e) => this.setState({ hemi: e.target.value });
  onListChange = (e) => this.setState({ listType: e.target.value })
  handleSearchChange = (e) => this.setState({ searchField: e.target.value });
  render() {
    const { searchField, listType, listTime, hemi, time, sortBy } = this.state;
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
    const sortArr = nowFilter.sort(function(a, b) {
      switch (sortBy.char) {
        case 'name':
          var nameA = a["Name"].toUpperCase();
          var nameB = b["Name"].toUpperCase();
          if (sortBy.order === "des") {
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          } else if (sortBy.order === "asc") {
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
          }
          return 0;
          break;
        case 'price':
          if(sortBy.order === "des"){
            return b["Sell"] - a["Sell"];
          } else if (sortBy.order === "asc"){
            return a["Sell"] - b["Sell"]
          }
          break;
        // case 'shadow':
        //   break;
        // case 'rarity':
        //   return b["Spawn Rate"] - a["Spawn Rate"];
        //   break;
        case 'list':
          return true;
      }
    });
  
    return (
      <div className="App">
        <div className="App-title">
          <h1>ACNH Island Compendium</h1>
          <div id="payme">
            <p>Please support this and help me eat! →→→</p>
            <p id="cashapp"><a href="https://cash.app/$ChironJon">CashApp</a></p>
            <p id="venmo"><a href="https://www.venmo.com/ChironJon">Venmo</a></p>            
          </div>
        </div>
        <div className="navbar">
          <ul className="nav">
            <li><a href="/">Furniture[soon!]</a></li>
            <li><a href="/">Villagers[soon!]</a></li>
            <li><a href="/">Critters</a></li>
          </ul>
        </div>
        <div className="topHalf">
          <div className="userInput">
            <UserInput 
              hemiChange={this.onHemiChange}
              handleSearchChange={this.handleSearchChange}
              listType={listType}
              onListChange={this.onListChange}
              dropMonthChange={this.dropMonthChange} 
              dropHourChange={this.dropHourChange}
              listTime={listTime}
              listTimeChange={this.listTimeChange}
              time={time}
              hemi={hemi}
            />
          </div>
          <div className="sortInput">
            <SortingInput 
              sortCharChange={this.sortCharChange}
              sortOrderChange={this.sortOrderChange}
            />
          </div>
        </div>
        <div className="cardList">
          <CardList 
            hemi={hemi} 
            critters={sortArr}
          />
        </div>
      </div>
    );
  }
}

export default App;
