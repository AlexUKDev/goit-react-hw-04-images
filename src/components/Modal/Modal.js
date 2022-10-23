export const Modal = ({ largeImageURL, tags, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={largeImageURL} alt={tags} className="ModalImg" />
      </div>
    </div>
  );
};
