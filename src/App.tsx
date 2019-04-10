import React, { Component } from 'react';
import './App.scss';
import './neon.css';
import {MuiThemeProvider} from "@material-ui/core";
import Particles from 'react-particles-js';
import {particleConfig} from "./particleConfig";
import {theme} from "./theme";
import classnames from 'classnames';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <h1 className={'main-header'}>Welcome to Duranta97</h1>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
