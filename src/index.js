// Libs
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyCvyRhAluoUohlVYpcynC5XiInYq2LV4pg";

// Main component
class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: []}

    YTSearch({key: API_KEY, term: 'reactjs'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

// Render HTML component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
