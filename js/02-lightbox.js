import { galleryItems } from './gallery-items.js';
// Change code below this line

// get ul with class gallery
const list = document.querySelector('.gallery');

// create markup
const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>

`
  )
  .join('');

// add all items with links and images to list
list.insertAdjacentHTML('afterbegin', markup);

// add SimpleLightbox library to the list (.gallery a (a - links inside markup)) with options (object parameters) for caption (text above opened picture get from alt, delay for the caption)
let gallerySimpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallerySimpleLightbox.on('error.simplelightbox', function (e) {
  console.log(e);
});
