import { reactive } from 'vue';

export const store = reactive({
    movieList: [],
    seriesList: [],
    options: {
        params: {
            language: 'it-IT',
            query: '',
            api_key: '79bd12515f589d0a42a839c9c89c9ded', 
        }
    },
    url: {
        baseUrl: 'https://api.themoviedb.org/3/search/',
        movieEndpoint: 'movie',
        seriesEndpoint: 'tv',

    }

    
})