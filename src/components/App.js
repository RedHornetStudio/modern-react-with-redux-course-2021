import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchBarSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID YBBET-t3nKXMT8zm4Ft0uJfyYqQlWfNDVOdjH1aVqBM'
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="app ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
        Found: {this.state.images.length} images
      </div>
    );
  }
};

export default App;