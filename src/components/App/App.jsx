import React, { Component } from 'react';
import api from '../services/pixabayApi';
import { Container } from 'components';
import SearchBar from 'components/SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    searchText: '',
  };

  onSubmit = ({ searchText }, { resetForm }) => {
    console.log('🚀 ~ file: App.jsx:8 ~ search:', searchText);

    resetForm();
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const images = await api.fetchImagesQuery('react');
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { images } = this.state;

    return (
      <Container>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery images={images} />
      </Container>
    );
  }
}
