import React, { Component } from 'react';
import './App.css';
import Layouts from './containers/layouts/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
