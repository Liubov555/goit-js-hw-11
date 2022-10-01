import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.photo-card a', {
    captions: true,
    captionsDate: 'alt',
    captionsDelay: 250,
});

export { lightbox };