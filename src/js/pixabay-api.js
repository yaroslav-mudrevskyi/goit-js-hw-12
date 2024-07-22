import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com',
});

export async function onSearchImages(inputValue, currentPage) {
  const res = await axios.get('/api/', {
    params: {
      key: '45015838-73ef95672254612a035b0fb4a',
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: 100,
    },
  });
  return res.data;
}
