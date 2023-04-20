import axios from 'axios';

const API_KEY = '34178122-6f2f44cafc8883bb29b8df8c2';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImagesQuery = async searchQuery => {
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=1&per_page=12&image_type=photo&orientation=horizontal`
  );
  return response.data.hits;
};

export default {
  fetchImagesQuery,
};
