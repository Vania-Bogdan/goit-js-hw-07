import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createGalleryCard(cards) {
    return cards.map(({ preview, original, description }) => {
        return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
};
galleryEl.insertAdjacentHTML('afterbegin', createGalleryCard(galleryItems));


galleryEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    };

    createModal(e);
});


function createModal(e) {
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" />`);
    instance.show();

    document.addEventListener('keydown', onEscClick);
    
    function onEscClick(e) {
        if (e.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', onEscClick);
        };
    }
    

};


