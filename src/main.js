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
  btnLoadMore: document.querySelector('.btn-load'),
};

hideLoader();
hideLoadMoreBtn();

let currentPage = 1;
let maxPage = 0;
const per_page = 15;
let inputValue;

refs.formEl.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  try {
    e.preventDefault();
    showLoader();
    currentPage = 1;
    refs.markupEl.innerHTML = '';
    inputValue = refs.formEl.elements.image.value.trim();
    if (!inputValue) return;
    refs.formEl.reset();
    const res = await onSearchImages(inputValue);
    maxPage = Math.ceil(res.totalHits / per_page);
    if (!res.hits.length) {
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
    renderImages(res.hits);
    gallery.refresh();
  } catch (error) {
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
  } finally {
    updateBtnStatus();
    hideLoader();
  }
}

refs.btnLoadMore.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();
  try {
    const res = await onSearchImages(inputValue, currentPage);
    const markup = imageMarkupTemplate(res.hits);
    refs.markupEl.insertAdjacentHTML('beforeend', markup);
    gallery.refresh();
  } catch (error) {
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
  } finally {
    scrollPage();
    updateBtnStatus();
    hideLoader();
  }
});

function renderImages(arr) {
  const markup = imageMarkupTemplate(arr);
  refs.markupEl.innerHTML = markup;
}

const gallery = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function showLoadMoreBtn() {
  refs.btnLoadMore.classList.remove('hidden');
}

function hideLoadMoreBtn() {
  refs.btnLoadMore.classList.add('hidden');
}

function updateBtnStatus() {
  if (maxPage <= 1) {
    hideLoadMoreBtn();
  } else if (currentPage === maxPage && maxPage !== 1) {
    hideLoadMoreBtn();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      messageColor: '#4D3B03',
      backgroundColor: '#06D8A8',
      position: 'bottomRight',
      timeout: 4000,
    });
  } else {
    showLoadMoreBtn();
  }
}

function showLoader() {
  refs.loader.classList.remove('hidden');
}
function hideLoader() {
  refs.loader.classList.add('hidden');
}

function scrollPage() {
  const myElem = refs.markupEl.firstElementChild;

  const height = myElem.getBoundingClientRect().height;

  scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
