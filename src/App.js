import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {
  
    return(
      <div className="App">
        hallo
      </div>
      
    );
  }
}

export default connect()(App);
