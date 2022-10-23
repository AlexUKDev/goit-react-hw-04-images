import { Component } from 'react';
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeydown);
  }

  hendleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  render() {
    const { largeImageURL, tags, closeModal } = this.props;
    return (
      <div className="Overlay" onClick={closeModal}>
        <div className="Modal" onClick={e => e.stopPropagation()}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
