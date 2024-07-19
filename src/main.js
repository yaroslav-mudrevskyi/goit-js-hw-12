import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formEl: document.querySelector('.js-form'),
  inputSearchEl: document.querySelector('.input-search'),
  btnSearchEl: document.querySelector('.btn-search'),
  markupEl: document.querySelector('.markup'),
  loader: document.querySelector('.loader'),
};

function showLoader() {
  refs.loader.classList.remove('hidden');
}
function hideLoader() {
  refs.loader.classList.add('hidden');
}
// showLoader();
hideLoader();

refs.formEl.addEventListener('submit', onSearchImages);

function onSearchImages(e) {
  e.preventDefault();
  const inputValue = refs.formEl.elements.image.value.trim();
  if (!inputValue) return;
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  refs.formEl.reset();
  return fetch(
    `${BASE_URL}${END_POINT}?key=45015838-73ef95672254612a035b0fb4a&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(value => {
      if (!value.ok) throw new Error(value.status);
      return value.json();
    })
    .then(value => {
      if (!value.hits.length) {
        iziToast.show({
          title: 'Oops',
          titleColor: '#FAFAFB',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FAFAFB',
          backgroundColor: '#EF4040',
          position: 'topRight',
          timeout: 3000,
        });
      }
      return value.hits;
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        titleColor: '#FAFAFB',
        message: 'Sorry, something wrong',
        position: 'topRight',
        messageColor: '#FAFAFB',
        backgroundColor: '#EF4040',
        position: 'topRight',
        timeout: 3000,
      });
    });
}

function imageMarkupTemplate(arr) {
  return arr
    .map(item => {
      `<li class="gallery-item">
  <a class="gallery-link" href="${item.largeImageURL}">
    <img
      class="gallery-image"
      src="${item.webformatURL}"
      alt="${item.tags}"
      width="360"
      height="200"
    />
     <ul class="image-dsc">
        <li > 
            <p class="image-dsc-title">Likes</p>
            <p class="image-dsc-text">${item.likes}</p>
        </li>
         <li > 
            <p class="image-dsc-title">Views</p>
            <p class="image-dsc-text">${item.views}</p>
        </li>
        <li > 
            <p class="image-dsc-title">Comments</p>
            <p class="image-dsc-text">${item.comments}</p>
        </li>
        <li > 
            <p class="image-dsc-title">Downloads</p>
            <p class="image-dsc-text">${item.downloads}</p>
        </li>
     </ul>
  </a>
</li>`;
    })
    .join('');
}

function imagesMarkup(arr) {
  return arr.map(imageMarkupTemplate).join(' ');
}

function renderImages(arr) {
  const markup = imagesMarkup(arr);
  refs.markupEl.innerHTML = markup;
}
