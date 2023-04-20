import React from 'react';
import ReactDOM from 'react-dom';
import { OverlayStyle, ModalStyle } from './Modal.styled';

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <OverlayStyle>
        <ModalStyle className="modal-content">{this.props.children}</ModalStyle>
      </OverlayStyle>,
      document.getElementById('modal-root')
    );
  }
}

export default Modal;
