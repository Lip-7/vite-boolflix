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
            "backdrop_path": "/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg",
            "first_air_date": "2011-04-17",
            "genre_ids": [
            10765,
            18,
            10759
            ],
            "id": 1399,
            "name": "Il Trono di Spade",
            "origin_country": [
            "US"
            ],
            "original_language": "en",
            "original_name": "Game of Thrones",
            "overview": "La serie racconta le avventure di molti personaggi ed è ambientata in un grande mondo immaginario costituito principalmente dal continente Occidentale (Westeros) e da quello Orientale (Essos). Il centro più grande e civilizzato di Westeros è la città capitale Approdo del Re, dove si trova il Trono di Spade dei Sette Regni. La lotta per la conquista del trono porta le più potenti e nobili famiglie del continente a scontrarsi o allearsi tra loro in un contorto gioco di potere, che coinvolge anche l'ultima discendente della dinastia regnante deposta. Gli intrighi politici, economici e religiosi dei nobili lasciano la popolazione nella povertà e nel degrado, mentre il mondo viene minacciato dall'arrivo di un inverno diverso dai precedenti, che risveglia creature leggendarie dimenticate e fa emergere forze oscure e magiche.",
            "popularity": 488.945,
            "poster_path": "/qwGKZ0vy6o69aErE6cJ43L8DE2N.jpg",
            "vote_average": 8.4,
            "vote_count": 20954
            },
    ],
    flags: {
        splashFlag: true,
    },
    img: {
        baseUrl: 'https://image.tmdb.org/t/p/w300/',
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
        this.getSeries()
    },
    getSeries() {
        const baseUrl = this.url.baseUrl + this.url.seriesEndpoint + this.url.popularEndpoint;
        const options = this.getOptions()
        axios.get(baseUrl, options).then(res => {
            this.seriesList = res.data.results
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
        if (!this.options.params.query) {
            return
        }
        const baseUrl = this.url.baseUrl + this.url.searchEndpoint + this.url.movieEndpoint;
        const options = this.getOptions();
        axios.get(baseUrl, options).then(res => {
            this.movieList = res.data.results;
        }).catch(error => {
            console.log(error);
        })
        this.searchSeries();
    },
    searchSeries() {
        const baseUrl = this.url.baseUrl + this.url.searchEndpoint + this.url.seriesEndpoint;
        const options = this.getOptions();
        axios.get(baseUrl, options).then(res => {
            this.seriesList = res.data.results;
        }).catch(error => {
            console.log(error);
        })
    },
})