import React from 'react';
import NewsItem from './Newsitem';

class News extends React.Component {
  render(){
    const title = 'react js';
    const description = 'react description';
    return(
      <div>
         
         <NewsItem hallo={title} lorem={ description }/>
      </div>
    )
  }
}

export default News;