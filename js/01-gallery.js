import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(basicLightbox, galleryItems);

// get ul with class gallery
const list = document.querySelector('.gallery');

// create markup
const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
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

// add all items with links and images to list
list.insertAdjacentHTML('afterbegin', markup);

// add ivent listener to list
list.addEventListener('click', handleClick);

// console.dir(list);

// create function for event listener
function handleClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  // get dataset value from element that was clicked
  const imageSource = e.target.dataset.source;
  // get image data from gallery-items that match imageSource
  const imageData = galleryItems.find(
    ({ original }) => original === imageSource
  );

  // create modal with the image that match image that was clicked
  createModal(imageData);
}

function createModal({ original, description }) {
  // create modal with big image
  const instance = basicLightbox.create(
    `
  <img
      class="gallery__image"
      src="${original}"
      data-source="${original}"
      alt="${description}"
    />
  `
  );

  // show the modal, add event listener that close modal when key Escape clicked
  instance.show(() => {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        instance.close();
      }
    });
  });
}
