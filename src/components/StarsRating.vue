<template>

    
    <div class="Stars" :style="'--rating: ' + vote + ';'" aria-label="Rating of this product is 2.3 out of 5.">
    </div>
    

 
</template>
  
<script>
export default {
    name: 'StarsRating',
    data() {
        return {

        }
    },
    props: ['vote'],
    methods: {

    },
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
:root {
  --star-size: 60px;
  --star-color: #fff;
  --star-background: #fc0;
}

.Stars {
  --percent: 80%;
  
  display: inline-block;
  font-size: var(--star-size);
  font-family: Times, serif; // make sure ★ appears correctly
  line-height: 1;
  
  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

// Just to make a preview more beautifull
</style>