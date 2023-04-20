import React, { Component } from 'react';

import { Container } from 'components';
import SearchBar from 'components/SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
        <ImageGallery />
      </Container>
    );
  }
}
