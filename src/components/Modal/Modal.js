import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, tags, closeModal }) => {
  useEffect(() => {
    const hendleKeydown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', hendleKeydown);

    return () => window.removeEventListener('keydown', hendleKeydown);
  }, [closeModal]);

  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal" onClick={e => e.stopPropagation()}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
