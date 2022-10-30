import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <li className="gallery-item">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={toggleModal}
      />
      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          closeModal={toggleModal}
        />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  key: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
