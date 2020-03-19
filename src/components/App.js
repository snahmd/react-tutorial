import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


//import News from './News';
import Counter from './Counter';
import Footer from './Footer';
import Child from './Child';

/*const news = [{
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
}];*/

class App extends Component {

  state = {
    tl: 0
  };
  
  changeTL = (e) => {
    this.setState({
      tl: e.target.value
    })
  };

  shouldComponentUpdate(nextProps, nextState) {
    //console.log('shouldComponentUpdate', nextProps, nextState);
    return (nextState.tl % 10) === 0;
  }
  
  
  /*
  state = {
    name: 'mehmet'
  };

  
  constructor(props) {
    super();
    console.log("constructor çalıştı");
    console.log(props);

  }

  
  componentWillMount() {
    console.log('componentWillMount çalıştı');
  }
  
  componentDidMount() {
    console.log('componentDidMount çalıştı');

  }
  
  changeName = () => {
    this.setState({
      name: 'Kenan'
    })
  };
 */
  /*constructor(props) {
    super(props);
    this.state = {
      name: 'ahmed'
    }
  }*/
  /*state = {
    name: 'mehmet'
  };*/
  /*changeName(){
    this.setState({
      name: 'ahmet' + Math.floor(Math.random() *3)
    });
    //this.state.name = "ahmet";
    console.log(this.state); 
  }*/


  /*addNews(){
    console.log("addNews componenti çalıştı");
    news.push({
      id: 4,
      title: "title 4",
      description: "description 4"
    }); 
    console.log(news);
  }*/
  /*render() {
    return(
      <div className="App">
        <header className="App-header">
         <News news={news} addNews={this.addNews} />
         <h1>{ this.state.name }</h1>
         <button onClick={ this.changeName.bind(this) }>Change the name</button>
        </header>
       
        
      </div>
    );
  } */ 
  render() {
    console.log('render çalıştı')
    return(
      <div className="App">
        { this.state.name }
       <Counter/>
       <Footer/>
       <br/>
       <Child name={this.state.name}/>
       <button onClick={this.changeName}>Change the name</button>
       <br/>
       <input name="tl" id="tl" onChange={this.changeTL}/>
       <br/>
       <br/>
       Her elma 10 tl.<br/>
       { this.state.tl / 10 } tane elma alabilirsiniz.
      </div>
    );
  }
}

export default App;
