<template>
    <form @submit.prevent="" class="d-flex" role="search">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
    </form>
</template>
  
<script>
export default {
    name: 'SearchBar',
    data() {
        return {

        }
    },
    methods: {

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