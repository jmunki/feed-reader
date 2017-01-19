import React, { Component } from 'react';
//import './FeedFetcher.css';

import 'whatwg-fetch'
import TypeConverter from './TypeConverter'

class FeedFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedUrl: '',
    }
  }
  onClick () {
    //var url = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.digg.com/rss/index.xml';
    var url = 'https://feeds.bbci.co.uk/news/technology/rss.xml?edition=uk';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            //console.log((new TypeConverter).xmlToJson(this.responseText));
        }
    }
    xmlhttp.open("GET",url);
    xmlhttp.withCredentials = false;
    xmlhttp.send();
  }
  render() {
    return (
      <div className="feed-fetcher">
        <input onChange={(e) => this.setState({feedUrl: e.target.value})}/>
        <button onClick={this.onClick}>Add</button>
      </div>
    );
  }
}

export default FeedFetcher;
