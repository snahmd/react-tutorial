import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import News from './News';

const news = [{
  id:1,
  title: "title 1",
  description: "description 1",
},
{
  id:2,
  title: "title 2",
  description: "description 2"
},
{
  id:3,
  title: "title 3",
  description: "description 3" 
}];

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      name: 'ahmed'
    }
  }*/
  state = {
    name: 'mehmet'
  };


  addNews(){
    console.log("addNews componenti çalıştı");
    news.push({
      id: 4,
      title: "title 4",
      description: "description 4"
    }); 
    console.log(news);
  }
  render() {
    return(
      <div className="App">
        <header className="App-header">
         <News news={news} addNews={this.addNews} />
         <h1>{ this.state.name }</h1>
        </header>
       
        
      </div>
    );
  }  
}

export default App;
