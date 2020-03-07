import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './Newsitem';

class News extends React.Component {
  static propTypes = {
    news: PropTypes.array.isRequired,
    name: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
  };

  static defaultProps = {
    name: "san"
  };
  
  render(){
    const elements = this.props.news.map(news => 
      <div key={news.id}>
        <NewsItem 
          newsData={news}/>
      </div>
      );

    return(
      <div> 
        { this.props.name }
        { elements }
      </div>
    )
  }
}

export default News;