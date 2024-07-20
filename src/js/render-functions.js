export function imageMarkupTemplate(arr) {
  return arr
    .map(item => {
      return `<li class="gallery-item">
  <a class="gallery-link" href="${item.largeImageURL}">
    <img
      class="gallery-image"
      src="${item.webformatURL}"
      alt="${item.tags}"
    />
  </a>
     <ul class="image-desc">
        <li class="image-subtitle"> 
            <h3 class="image-desc-title">Likes</h3>
            <p class="image-desc-text">${item.likes}</p>
        </li>
         <li class="image-subtitle"> 
            <h3 class="image-desc-title">Views</h3>
            <p class="image-desc-text">${item.views}</p>
        </li>
        <li class="image-subtitle"> 
            <h3 class="image-desc-title">Comments</h3>
            <p class="image-desc-text">${item.comments}</p>
        </li>
        <li class="image-subtitle"> 
            <h3 class="image-desc-title">Downloads</h3>
            <p class="image-desc-text">${item.downloads}</p>
        </li>
     </ul>
</li>`;
    })
    .join('');
}
