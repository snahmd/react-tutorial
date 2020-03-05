import React from 'react';
import NewsItem from './Newsitem';

class News extends React.Component {
  render(){
    const elements = this.props.news.map(news => 
      <NewsItem 
      title={news.title}
      description={news.description}/>
      )

    return(
      <div> 
        { elements }
      </div>
    )
  }
}

export default News;