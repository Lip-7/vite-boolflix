<template>
    <main>
        <MoviesList/>
        <SeriesList/>
    </main>
</template>
  
<script>
import SeriesList from './SeriesList.vue';
import MoviesList from './MoviesList.vue';
export default {
    name: 'MainComponent',
    data() {
        return {

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
  
<style lang="scss" scoped></style>