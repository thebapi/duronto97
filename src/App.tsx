import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Duronto97
          </p>
        </header>
          <div>
              <canvas id="bg-animation" width="2776" height="876"></canvas>
          </div>
      </div>
    );
  }
}

export default App;
