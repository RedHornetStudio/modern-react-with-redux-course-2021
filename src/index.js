import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  render() {
    navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
  
    return <div>Hi there!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));