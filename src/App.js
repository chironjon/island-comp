import React, { Component } from 'react';
import TimeInput from './components/TimeInput/TimeInput';
import insects from './components/insects';
import CardList from './components/CardList/CardList';

import './App.css';

const insectList = insects.map((item) => item);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insectArr: insectList,
      time: ''
    }

  }
  componentDidMount() {

  }
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <TimeInput />
          <CardList insects={this.state.insectArr}/>
        </div>
      </div>
    );
  }
}

export default App;
