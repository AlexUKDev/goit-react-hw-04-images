import { Component } from 'react';
import { Modal } from '../Modal/Modal';
export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };
  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <li className="gallery-item">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={this.openModal}
        />
        {this.state.isOpenModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            closeModal={this.closeModal}
          />
        )}
      </li>
    );
  }
}

//  <Modal largeImageURL={largeImageURL} tags={tags} />
