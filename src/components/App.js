import React from 'react';

import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchBarSubmit('cars');
  }

  onSearchBarSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    }).catch(err => {
      console.log(`error in fettching videos: ${err.message}`)
    })

    if(response) {
      this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  };

  render() {
    return (
      <div className="app ui container">
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;