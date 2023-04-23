<template>
    <div class="col-12 col-sm-6 col-md-3 col-lg-2 flip-card">
        <div class="flip-card-inner position-relative">
            <div class="card flip-card-front">
                <img v-if="img" :src="store.img.baseUrl + img" class="card-img-top" :alt="title">
                <img v-else src="../assets/img/imgplaceholder.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title mb-0">{{ title }}</h5>
                </div>
            </div>
            <div class="cardInfo position-absolute flip-card-back">
                <h3>{{ originaltitle }}</h3>
                <div class="w-100 position-relative">
                    <div class="d-flex align-items-center gap-2 mb-2 language">
                        <h6 class=" mb-0">Original lenguage:</h6>
                        <img :src="'/flags/' + flag + '.svg'" alt="">
                    </div>
                    <div class="rating d-flex gap-2">
                        <h6>Rating: </h6>
                        <StarsRating :vote="stars" />
                    </div>
                    <div class="playButton">
                        <i class="fa-solid fa-circle-play"></i>
                    </div>
                </div>
                <div class="description">
                    <p>{{ description }}</p>
                </div>
            </div>
        </div>
        <div class="card opacity-0">
            <img v-if="img" :src="store.img.baseUrl + img" class="card-img-top" :alt="title">
            <img v-else src="../assets/img/imgplaceholder.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title mb-0">{{ title }}</h5>
            </div>
        </div>
    </div>
</template>
  
<script>
import StarsRating from './StarsRating.vue'
import { store } from '../store/store.js'
export default {
    name: 'SingleContent',
    data() {
        return {
            store,
            availableFlahs: [
                'en', 'it', 'ko', 'es', 'fr', 'gb', 'ja', 'pt', 'undefined'
            ],
            cardInfo: false,
        }
    },
    props: ['img', 'title', 'vote', 'originaltitle', 'originLanguage', 'description'],
    methods: {

    },
    components: {
        StarsRating,

    },
    mounted() {

    },
    computed: {
        flag() {
            if (this.availableFlahs.includes(this.originLanguage)) {
                return this.originLanguage
            } else {
                return 'undefined'
            }
        },
        stars() {
            return this.vote / 2;
        }
        /* stars() {
            return Math.round(this.vote) / 2;
        },
        starscount() {
            const maxStars = [1, 2, 3, 4, 5];
            if (Number.isInteger(stars)) {
                maxStars.length = stars;
                return maxStars;
            } else {
                const starNew = Math.round(stars)
            }
        } */
    },
}
</script>
  
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.flip-card {
    perspective: 1000px;
    /* height: 250px; */
    overflow-y: hidden;

    .flip-card-inner {
        width: 100%;
        height: 100%;
        transition: transform .8s;
        transform-style: preserve-3d;
    }

    &:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        /* Safari */
        backface-visibility: hidden;
    }

    .flip-card-back {
        transform: rotateY(180deg);
    }
}

.card {
    background-color: $bgColor;
    color: white;
    box-shadow: 0px 0px 8px black;
    cursor: pointer;

    .card-body {}
}

.cardInfo {
    padding: 5px;
    color: white;
    opacity: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $bgColor;
    overflow-y: hidden;

    img {
        width: 20px;
    }

    .description {
        overflow-y: auto;
        height: 50%;
        &::-webkit-scrollbar{
            display: none;
        }
    }

    .playButton {
        opacity: .7;
        font-size: 2rem;
        position: absolute;
        top: 0px;
        right: 10px;
        cursor: pointer;
        transition: all 1s;

        &:hover {
            scale: 1.5;
            opacity: 1;
        }
    }
}</style>