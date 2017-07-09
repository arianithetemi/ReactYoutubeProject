// Libs
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Components
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCvyRhAluoUohlVYpcynC5XiInYq2LV4pg";

// Create new component
class App extends Component {
  // Produce HTML
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}


// Render HTML component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
