<template>
    <div class="wrap">
        <video autoplay muted>
            <source src="../assets/vids/intro.mp4">
        </video>
    </div>
</template>
  
<script>
export default {
    name: 'SplashPageComponent',
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
.wrap{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    video{
        position: relative;
        top: -50px;
        width: 100%;
    }
}
</style>