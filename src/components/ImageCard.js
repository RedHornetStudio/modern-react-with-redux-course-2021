import React from 'react';

import './ImageCard.css';

class ImageCard extends React.Component {
  state = { spans: 0 };

  imageRef = React.createRef();

  componentDidMount = () => {
    this.imageRef.current.addEventListener('load', this.setSpans);
  };

  setSpans = (e) => {
    const height = e.target.clientHeight;
    const spans = Math.floor(height / 10);

    e.target.style.height = `${spans * 10}px`;
    this.setState({ spans: spans });
  };

  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <div className="image-card" style={{ gridRowEnd: `span ${this.state.spans + 1}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCard;