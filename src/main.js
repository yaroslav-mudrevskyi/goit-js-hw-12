import { imageMarkupTemplate } from './js/render-functions';
import { onSearchImages } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formEl: document.querySelector('.js-form'),
  inputSearchEl: document.querySelector('.input-search'),
  btnSearchEl: document.querySelector('.btn-search'),
  markupEl: document.querySelector('.markup'),
  loader: document.querySelector('.loader'),
};

hideLoader();

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  showLoader();
  refs.markupEl.innerHTML = '';
  const inputValue = refs.formEl.elements.image.value.trim();
  if (!inputValue) return;
  refs.formEl.reset();
  onSearchImages(inputValue)
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
        return;
      }
      renderImages(value.hits);
      gallery.refresh();
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
    })
    .finally(() => {
      hideLoader();
    });
}

function renderImages(arr) {
  const markup = imageMarkupTemplate(arr);
  refs.markupEl.innerHTML = markup;
}

const gallery = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function showLoader() {
  refs.loader.classList.remove('hidden');
}
function hideLoader() {
  refs.loader.classList.add('hidden');
}
