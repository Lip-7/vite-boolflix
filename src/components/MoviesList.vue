<template>
    <div class="row p-5 g-3">
        <h1 class="h2 text-white mb-3">Movies</h1>
        <SingleContent v-for="(movie, i) in store.movieList" :key="i" :title="movie.original_title" :img="store.img.baseUrl + movie.backdrop_path"/>
    </div>
</template>
  
<script>
import {store} from '../store/store.js'
import SingleContent from './SingleContent.vue';
export default {
    name: 'MoviesList',
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    components: {
        SingleContent,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped></style>