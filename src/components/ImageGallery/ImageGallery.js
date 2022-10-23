import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
export const ImageGallery = ({ response }) => {
  return (
    <ul className="ImageGallery">
      {response.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};

ImageGalleryItem.propTypes = {
  response: PropTypes.array,
};
