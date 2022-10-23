import axios from 'axios';

const BASE_URL = 'https://pixabay.com';
const PIXABAY_API_KEY = '29756284-9fd5906fdaeaa95b8e4b48e13';

axios.defaults.baseURL = BASE_URL;

export const FetchData = async (query, page) => {
  const optionsRequest = {
    params: {
      q: query,
      key: PIXABAY_API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  };
  const response = await axios.get('api/', optionsRequest);

  // console.log(response);
  return response.data;
};
