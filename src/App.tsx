import React, { Component } from 'react';
import './App.scss';
import {MuiThemeProvider} from "@material-ui/core";
import Particles from 'react-particles-js';
import {particleConfig} from "./particleConfig";
import {theme} from "./theme";


class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
        <div className="App">
          <h1>Duranta97</h1>
            <Particles  params={{...particleConfig as any}}/>
      </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
