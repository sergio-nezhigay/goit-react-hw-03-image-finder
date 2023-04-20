import React, { Component } from 'react';

import Modal from 'components/Modal/Modal';

import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
  ModalImage,
} from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  state = { showModal: false };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleHideModal = () => {
    this.setState({ showModal: false });
  };

  onImageClick(imageUrl) {
    console.log(
      '🚀 ~ file: ImageGalleryItem.jsx:13 ~ largeImageURL ~ onImage ~ id:',
      imageUrl
    );
    this.setState({ activeImage: imageUrl });
  }

  render() {
    const { largeImageURL, webformatURL, tags } = this.props.image;

    return (
      <>
        <ImageGalleryItemStyled>
          <ImageGalleryItemImage
            src={webformatURL}
            alt={tags}
            onClick={this.handleShowModal}
          />
        </ImageGalleryItemStyled>
        {this.state.showModal && (
          <Modal>
            <ModalImage src={largeImageURL} onClick={this.handleHideModal} />
            <button onClick={this.handleHideModal}>Close Modal</button>
          </Modal>
        )}
      </>
    );
  }
}
