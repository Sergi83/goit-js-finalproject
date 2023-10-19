import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// get ul with class gallery
const list = document.querySelector('.gallery');

// create markup
const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');

list.insertAdjacentHTML('afterbegin', markup);
