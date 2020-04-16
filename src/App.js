import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { updateUser, getUsers } from './actions/user-actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser() {
    this.props.onUpdateUser('Veli');
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.onGetUsers();
    }, 2000);
    
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

const mapStateToProps = (state, props) => {
  //console.log(props);
  return {
    ...state,
    myCount: props.count + 2
  };
};

const mapDispatchToProps = {
  onUpdateUser: updateUser,
  onGetUsers: getUsers
};

/** 
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState);
  console.log(propsFromDispatch);
  console.log(ownProps);
};

*/

export default connect(mapStateToProps, mapDispatchToProps)(App);
