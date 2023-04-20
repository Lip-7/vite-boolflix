<template>
    <div class="row p-5 g-3">
        <h1 class="h2 text-white mb-3">Movies</h1>
        <SingleContent v-for="(movie, i) in store.movieList" :key="i" :title="movie.title" :img="movie.backdrop_path" :originaltitle="movie.original_title" :originLanguage="movie.original_language" :vote="movie.vote_average"/>
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