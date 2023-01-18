import "./App.css";
import React, { Component } from "react";
import './App.css';
import {FooViewContainer} from '../src/containers/FooViewContainer'
import {DooViewContainer} from '../src/containers/DooViewContainer'
import NooView from '../src/components/NooView'
import {GitFetchViewContainer} from '../src/containers/GitFetchViewContainer'
import {GitUserInfoViewContainer} from '../src/containers/GitUserInfoViewContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { year: 2010 };
  }

  handleChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      this.setState({ year: value });
    }
  };

  render() {
    const { year } = this.state;
    return(
    <div className="App">
      <FooViewContainer year={year} />
      <DooViewContainer handleChange={this.handleChange} year={year} />
      <NooView />

      <GitFetchViewContainer />
      <GitUserInfoViewContainer />
    </div>
    )
  }
}

export default App;
