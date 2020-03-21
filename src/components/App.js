import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';


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

const News = ({ match }) => {
  
return(<h1>News page: { match.params.id }</h1>)
};


class App extends Component {

  /*
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

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate çalıştı', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate çalıştı', prevProps, prevState);
  }
  */
  
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

  /*
  state= {
    users: [],
    isLoading: true
  };

  componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(users => users.data )
      .then(users => {
        //console.log(users);
        this.setState({
          users:users,
          isLoading: false
        });
      }); 
  }
  */


  render() {
    //console.log('render çalıştı')
    
    //const { isLoading } = this.state;
    return(
      <Router>
        <div>
          <Route path="/" exact render={
            () => {
              return(<h1>Home page</h1>)
            }
          } />
          <Route path="/contact" exact strict render={
            () => {
              return(<h1>Contact page</h1>)
            }
          } />
          <Route path="/news/:id" exact strict component={News}/>
        </div>
      </Router>
      /*
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
      
      <div className="App">
        <h1>Users</h1>
        { isLoading ? 'Loading...' : '' }
        {
          !isLoading ? this.state.users.map(user =>
            <div key={ user.id } className={"userList"}>
              { user.name } - @{ user.username }
            </div>
          ) : null
        }
      </div>
      */
    );
  }
}

export default App;
