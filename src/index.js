import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import Clock from './Clock';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  };

  renderContent = () => {
    if(this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>;
    } else if(this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>
    } else {
      return <Spinner message="Getting your geolocation..." />
    }
  };

  render() {
    return (
      <div>
        <Clock />
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));