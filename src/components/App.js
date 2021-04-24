import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchBarSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    }).catch(err => {
      console.log(`error in fetching photos: ${err.message}`);
    });

    if(response) {
      this.setState({ images: response.data.results });
    }
  };
  
  render() {
    return (
      <div className="app ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
        <ImageList images={this.state.images} />
      </div>
    );
  }
};

export default App;