import React from 'react';
import NewsItem from './Newsitem';

class News extends React.Component {
  render(){
    const news = [{
        title: "title 1",
        description: "description 1",
      },
      {
        title: "title 2",
        description: "description 2"
      },
      {
        title: "title 3",
        description: "description 3" 
    }];

    return(
      <div> 
        <NewsItem 
          title={news[0].title}
          description={news[0].description}/>
        <NewsItem 
          title={news[1].title}
          description={news[1].description}/>
        <NewsItem 
          title={news[2].title}
          description={news[2].description}/>
      </div>
    )
  }
}

export default News;