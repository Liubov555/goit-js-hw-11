import axios from 'axios';

export default class Photo {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchGalleryCards() {
        const axiosOptions = {
            method: 'get',
            url: 'https://pixabay.com/api/',
            params: {
                key: '30298675-ee042d282ae1492461b2ba167',
                q: `${this.searchQuery}`,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page: `${this.page}`,
                per_page: 40,
            },

        };

        try {
            const response = await axios(axiosOptions);

            const data = response.data;
            this.incrementPage();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }


    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}