import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message })
      }
    );

    this.checkLatitude = () => {
      if(this.state.lat) {
        return <div>Latitude: {this.state.lat}</div>;
      } else if(this.state.errorMessage) {
        return <div>Error: {this.state.errorMessage}</div>
      } else {
        return <div>Loading...</div>
      }
    }
  }

  render() {
    return <div>{this.checkLatitude()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));