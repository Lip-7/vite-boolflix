<template>
    <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <div class="card">
            <img :src="img" class="card-img-top" :alt="title">
            <div class="card-body">
                <h5 class="card-title mb-0">{{ title }}</h5>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SingleContent',
    data() {
        return {

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