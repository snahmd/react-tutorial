import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props);
    return(
      <div className="App">
        hallo
      </div>
      
    );
  }
}

// const mapStateToProps = state => ({
//   products: state.products
// });

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
