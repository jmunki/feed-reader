import React, { Component } from 'react';
import './FeedReader.css';

import FeedFetcher from './FeedFetcher';

class FeedReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: []
    }
  }
  render() {
    return (
      <div className="feed-reader">
        <FeedFetcher onFetch={(e) => this.onNewFeed()} />
        {this.state.feeds.map}
      </div>
    );
  }
}

export default FeedReader;
