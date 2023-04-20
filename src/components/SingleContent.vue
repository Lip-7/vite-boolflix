<template>
    <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <div class="card">
            <img v-if="img" :src="store.img.baseUrl + img" class="card-img-top" :alt="title">
            <img v-else src="../assets/img/imgplaceholder.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title mb-0">{{ title }}</h5>
                <h6>{{ originLanguage }}</h6>
                <h6>{{ vote }}</h6>
                <!-- <img v-if="availableFlahs.includes(originLanguage)" :src="'/flags/' + originLanguage + '.svg'" alt=""> -->
                <img :src="'/flags/' + flag + '.svg'" alt="">
            </div>
        </div>
    </div>
</template>
  
<script>
import {store} from '../store/store.js'
export default {
    name: 'SingleContent',
    data() {
        return {
            store,
            availableFlahs: [
                'en', 'it', 'ko', 'es', 'fr', 'gb', 'ja', 'pt', 'undefined'
            ],
        }
    },
    props: ['img', 'title', 'vote', 'originaltitle', 'originLanguage'],
    methods: {

    },
    components: {

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
        }
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
        img{
            width: 20px;
        }

    }
}
</style>