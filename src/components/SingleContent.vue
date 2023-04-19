<template>
    <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <div class="card">
            <img v-if="img" :src="store.img.baseUrl + img" class="card-img-top" :alt="title">
            <img v-else src="../assets/img/imgplaceholder.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title mb-0">{{ title }}</h5>
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
        }
    },
    props: ['img', 'title', 'vote'],
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
.card{
    background-color: $bgColor;
    color: white;
    box-shadow: 0px 0px 8px black;
    cursor: pointer;
}
</style>