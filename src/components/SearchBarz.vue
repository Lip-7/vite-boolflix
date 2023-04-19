<template>
    <form @submit.prevent="submitSearch()" class="d-flex" role="search">
        <input v-model.trim="store.options.params.query" class="form-control" type="search" placeholder="Search" aria-label="Search">
    </form>
</template>
  
<script>
import {store} from '../store/store.js'
export default {
    name: 'SearchBar',
    data() {
        return {
            store,
        }
    },
    methods: {
        submitSearch() {
            console.log('Searching...');
            store.searchMovies()
            store.options.params.query = ''
        },
    },
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
form{
    input{
        background-color: $bgColor;
    }
}
</style>