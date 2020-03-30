import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser() {
    this.props.onUpdateUser('Veli');
  }
  render() {
    console.log(this.props);
    return(
      <div className="App">
        <h1>{this.props.user}</h1>
        <button onClick={this.onUpdateUser}>Change the name</button>
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

const mapDispatchToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
