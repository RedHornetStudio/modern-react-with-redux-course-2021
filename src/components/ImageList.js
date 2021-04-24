import React from 'react';

import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
  const imageCards = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  });

  return (
    <div className="image-list">{imageCards}</div>
  );
};

export default ImageList;