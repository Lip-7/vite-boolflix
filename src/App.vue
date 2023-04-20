<template>
  <SplashPageComponent v-if="store.flags.splashFlag"/>
  <HeaderComponent v-if="!store.flags.splashFlag"/>
  <MainComponent v-if="!store.flags.splashFlag"/>
</template>

<script>
import { store } from './store/store.js'
import SplashPageComponent from './components/SplashPageComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  methods: {
    
  },
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SplashPageComponent,
  },
  mounted() {
    store.getMovies()
    setTimeout(() => {
      store.flags.splashFlag = false;
    }, 5000);
  }
}
</script>

<style lang="scss" scoped></style>