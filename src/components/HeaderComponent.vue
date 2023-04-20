<template>
    <header>
        <div class="wrapper px-5 d-flex justify-content-between align-items-center py-3">
            <div class="leftSide d-flex align-items-center">
                <div class="logo"><a href="../../index.html" @click.prevent="store.getMovies"><img class=" img-fluid" src="../assets/img/logo.png" alt=""></a></div>
                <ul class=" d-flex gap-3 align-items-center mb-0">
                    <li>
                        <a href="#" class="navlink active">Home</a>
                    </li>
                    <li>
                        <a href="#" class="navlink">Serie TV</a>
                    </li>
                    <li>
                        <a href="#" class="navlink">Film</a>
                    </li>
                    <li>
                        <a href="#" class="navlink">Nuovi e popolari</a>
                    </li>
                    <li>
                        <a href="#" class="navlink">La mia lista</a>
                    </li>
                    <li>
                        <a href="#" class="navlink">Sfoglia per lingua</a>
                    </li>
                </ul>
            </div>
            <div class="rightSide d-flex align-items-center gap-3">
                <SearchBarz/>
                <a href="#" class="navlink mb-0">Bambini</a>
                <i class="fa-solid fa-bell text-white"></i>
                <div class="userImg"><img src="../assets/img/dog bono.png" alt="" class="rounded-1 img-fluid"></div>
            </div>
        </div>
    </header>
</template>
  
<script>
import {store} from '../store/store'
import SearchBarz from './SearchBarz.vue';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    components: {
        SearchBarz,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
header{
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    background-color: $bgColor;
    .wrapper{
        .logo{
            width: 100px;
        }
        .rightSide{
            a{
                position: relative;
                top: 2px;
            }
            i{
                cursor: pointer;
            }
            .userImg{
                width: 30px;
            }
        }
    }
}
</style>