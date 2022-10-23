import { Component } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <li className="gallery-item">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            closeModal={this.toggleModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  key: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
