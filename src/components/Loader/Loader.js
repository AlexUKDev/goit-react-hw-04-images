import { ThreeDots } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
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
