<template>
    <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <div class="card position-relative">
            <img v-if="img" :src="store.img.baseUrl + img" class="card-img-top" :alt="title">
            <img v-else src="../assets/img/imgplaceholder.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title mb-0">{{ title }}</h5>
            </div>
            <div class="cardInfo position-absolute">
                <h3>{{ originaltitle }}</h3>
                <div class="d-flex align-items-center gap-2 mb-2">
                    <h6 class=" mb-0">Original lenguage:</h6>
                    <img :src="'/flags/' + flag + '.svg'" alt="">
                </div>
                <div class="rating">
                    <h6>Rating: {{ vote }}  </h6>
                    <StarsRating :vote="stars"/>
                    
                </div>
                <!-- <img v-if="availableFlahs.includes(originLanguage)" :src="'/flags/' + originLanguage + '.svg'" alt=""> -->
            </div>
        </div>
    </div>
</template>
  
<script>
import StarsRating from './StarsRating.vue'
import {store} from '../store/store.js'
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
    props: ['img', 'title', 'vote', 'originaltitle', 'originLanguage'],
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
.card{
    background-color: $bgColor;
    color: white;
    box-shadow: 0px 0px 8px black;
    cursor: pointer;
    .card-body{
    }
    .cardInfo {
        opacity: .7;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: $bgColor;
        img{
            width: 20px;
        }
    }
}
</style>