import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './Newsitem';
import NewsForm from './NewsForm';

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
    console.log(this.props.addNews)
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
        <NewsForm addNews={this.props.addNews}/>
      </div>
    )
  }
}

export default News;