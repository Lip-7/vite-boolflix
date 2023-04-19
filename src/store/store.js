import { reactive } from 'vue';
import axios, { Axios } from 'axios';

export const store = reactive({
    movieList: [
        {
            "adult": false,
            "backdrop_path": "/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",
            "genre_ids": [
            28,
            12,
            14,
            878
            ],
            "id": 19995,
            "original_language": "en",
            "original_title": "Avatar",
            "overview": "Jake Sully è un marine costretto su una sedia a rotelle che accetta di trasferirsi sul pianeta Pandora in sostituzione del fratello morto, la cui missione era quella di esplorare il pianeta. Essendo l'atmosfera del pianeta tossica per gli umani sono stati creati degli esseri simili ai nativi Na'vi che possono essere 'guidati' dagli umani. Pandora è un enorme giacimento di un minerale prezioso per la Terra dove le fonti di energia sono azzerate. Gli indigeni Na'vi non hanno intenzione di essere colonizzati. Il compito iniziale dell'avatar di Jake sarà quello di conoscerne usi e costumi e di farsi accettare all'interno delle comunità indigene. Jake conosce così Neytiri, una guerriera Na'vi figlia del capo tribù. Da lei impara a divenire un guerriero molto diverso dal marine che è stato e se ne innamora ricambiato.",
            "popularity": 299.882,
            "poster_path": "/b1UAG3QykMoLxwDgzk1LqsBkkG3.jpg",
            "release_date": "2009-12-15",
            "title": "Avatar",
            "video": false,
            "vote_average": 7.569,
            "vote_count": 28913
            },
    ],
    seriesList: [
        {
            "adult": false,
            "backdrop_path": "/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",
            "genre_ids": [
            28,
            12,
            14,
            878
            ],
            "id": 19995,
            "original_language": "en",
            "original_title": "Avatar",
            "overview": "Jake Sully è un marine costretto su una sedia a rotelle che accetta di trasferirsi sul pianeta Pandora in sostituzione del fratello morto, la cui missione era quella di esplorare il pianeta. Essendo l'atmosfera del pianeta tossica per gli umani sono stati creati degli esseri simili ai nativi Na'vi che possono essere 'guidati' dagli umani. Pandora è un enorme giacimento di un minerale prezioso per la Terra dove le fonti di energia sono azzerate. Gli indigeni Na'vi non hanno intenzione di essere colonizzati. Il compito iniziale dell'avatar di Jake sarà quello di conoscerne usi e costumi e di farsi accettare all'interno delle comunità indigene. Jake conosce così Neytiri, una guerriera Na'vi figlia del capo tribù. Da lei impara a divenire un guerriero molto diverso dal marine che è stato e se ne innamora ricambiato.",
            "popularity": 299.882,
            "poster_path": "/b1UAG3QykMoLxwDgzk1LqsBkkG3.jpg",
            "release_date": "2009-12-15",
            "title": "Avatar",
            "video": false,
            "vote_average": 7.569,
            "vote_count": 28913
            },
    ],
    seriesList: [],
    img: {
        baseUrl: 'https://image.tmdb.org/t/p/w500/',
    },
    options: {
        params: {
            api_key: '79bd12515f589d0a42a839c9c89c9ded', 
            language: 'it-IT',
            query: '',
        }
    },
    url: {
        baseUrl: 'https://api.themoviedb.org/3',
        movieEndpoint: '/movie',
        seriesEndpoint: '/tv',
        popularEndpoint: '/popular',
        searchEndpoint: '/search',
    },
    getMovies() {
        const baseUrl = this.url.baseUrl + this.url.movieEndpoint + this.url.popularEndpoint;
        const options = this.getOptions()
        axios.get(baseUrl, options).then(res => {
            this.movieList = res.data.results
        }).catch(error => {
            console.log(error);
        })
    },
    getOptions() {
        const options = {
            params: {}
        };
        for (let key in this.options.params) {
            if (this.options.params[key]) {
                options.params[key] = this.options.params[key]
            };
        };
        return options
    },
    searchMovies() {
        const baseUrl = this.url.baseUrl + this.url.searchEndpoint + this.url.movieEndpoint;
        const options = this.getOptions();
        axios.get(baseUrl, options).then(res => {
            this.movieList = res.data.results
        }).catch(error => {
            console.log(error);
        })

    }
    
})