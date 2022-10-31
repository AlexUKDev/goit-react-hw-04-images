import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = ({ color, size, marginTop }) => {
  return (
    <ThreeDots
      height={size}
      width={size}
      radius="10"
      color={color}
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        width: '100%',
        height: '100%',
        marginTop: `${marginTop}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};

Loader.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
};
