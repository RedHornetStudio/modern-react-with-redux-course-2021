import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchBarSubmit = term => {
    console.log(`log from App.js: ${term}`);
  }

  render() {
    return (
      <div className="app ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
      </div>
    );
  }
};

export default App;