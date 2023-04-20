import React, { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { ImagesList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    console.log(
      '🚀 ~ file: ImageGallery.jsx:9 ~ ImageGallery ~ render ~ images:',
      images
    );
    return (
      <ImagesList>
        {images.map(image => (
          <ImageGalleryItem image={image} />
        ))}
      </ImagesList>
    );
  }
}

export default ImageGallery;
