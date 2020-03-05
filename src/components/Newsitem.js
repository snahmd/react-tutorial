import React, { Component } from 'react';
import '../Newsitem.css';

 
class NewsItem extends Component {
  render(){
    const { hallo, lorem } = this.props;
    return(
      <div>
        <h1 className="title">{hallo}</h1>
        <p>{ lorem }</p>
      </div>
    )
  }
}

export default NewsItem;