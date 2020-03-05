import React from 'react';
import NewsItem from './Newsitem';

class News extends React.Component {
  render(){
    let nameElement = <div>mehmet</div>
    return(
      <div>
         { nameElement } 
         <NewsItem></NewsItem>
      </div>
    )
  }
}

export default News;