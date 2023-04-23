<template>
    <main>
        <MoviesList v-if="store.movieList.length > 0" />
        <div v-else class="alert alert-danger mt-2">
            <h3>Non ci sono Film che rispettano le tue ricerche</h3>
        </div>
        <SeriesList v-if="store.seriesList.length > 0" />
        <div v-else class="alert alert-danger mt-2">
            <h3>Non ci sono Serie che rispettano le tue ricerche</h3>
        </div>
    </main>
</template>
  
<script>
import { store } from '../store/store'
import SeriesList from './SeriesList.vue';
import MoviesList from './MoviesList.vue';
export default {
    name: 'MainComponent',
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    components: {
        MoviesList,
        SeriesList,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
main {
    padding-top: 70px;
}
</style>