import React, { Component } from 'react';
import FeedReader from './FeedReader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <FeedReader />
      </div>
    );
  }
}

export default App;
