<template>
  <HeaderComponent/>
  <MainComponent/>
</template>

<script>
import {store} from './store/store.js'
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    
  },
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },
  mounted() {
    store.getMovies()
  }
}
</script>

<style lang="scss" scoped></style>