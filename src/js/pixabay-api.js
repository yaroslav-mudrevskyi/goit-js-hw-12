export function onSearchImages(inputValue) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '45015838-73ef95672254612a035b0fb4a',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${BASE_URL}${END_POINT}?${params}`).then(value => {
    if (!value.ok) throw new Error(value.status);
    return value.json();
  });
}
