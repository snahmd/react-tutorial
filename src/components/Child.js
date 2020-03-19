import React, { Component } from 'react';


class Child extends Component {
  constructor(props){
    super(props);
    console.log('child constructer');
  }
  
  componentWillMount() {
    console.log('child componentWillMount');
  }

  componentDidMount() {
    console.log('child componentDidMount');
  }
  
  render() {
    console.log('child render');
    return (
      <div>
        Child
      </div>
    );
  }
}


export default Child;