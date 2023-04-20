<template>
    <div class="row p-5 g-3 mx-0">
        <h1 class="h2 text-white mb-3">Series</h1>
        <SingleContent v-for="(serie, i) in store.seriesList" :key="i" :title="serie.name" :img="serie.backdrop_path" :originaltitle="serie.original_name" :originLanguage="serie.original_language" :vote="serie.vote_average"/>
    </div>
</template>
  
<script>
import {store} from '../store/store.js'
import SingleContent from './SingleContent.vue';
export default {
    name: 'SeriesList',
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