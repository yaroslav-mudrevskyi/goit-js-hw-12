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

// refs.inputSearchEl.addEventListener('input', e => {
//   if (e.target.value === '') return;
// });

// textInput.addEventListener('input', event => {
//   output.textContent = event.currentTarget.value;
// });

refs.formEl.addEventListener('submit', onSearchImages);

function onSearchImages(e) {
  //   e.preventDefault();
  const inputValue = refs.formEl.elements.image.value;
  if (inputValue === '') return;
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
      return value;
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

function imageTemplate(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${(tags, likes, views, comments, downloads)}"
    />
  </a>
</li>`
    )
    .join('');
}

function addImages(arr) {
  return arr.map(imageTemplate).join('');
}

// function renderImages() {
//   const result = onSearchImages();
//   console.log(result);
//   const markup = addImages(result.hits);
//   refs.markupEl.innerHTML = markup;
// }

// renderImages();
