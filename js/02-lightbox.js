import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

function createGalleryItem(cards) {
    return cards.map(({ original, preview, description }) => {
        return `<li><a class="gallery__item" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li> `
    }).join('');
};

galleryEl.insertAdjacentHTML('afterbegin', createGalleryItem(galleryItems));

  const lightbox = new SimpleLightbox(`.gallery a`, {
      captions: true,
      captionsData: `alt`,
      captionsDelay: 250,
  });


