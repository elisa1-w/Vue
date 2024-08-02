<template>
 
  
    <Footer/>
     <Body/>
    

  
    
  

      <router-view/>
    
 
</template>

<script>
import Body from './components/Body.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  name: 'BackgroundComponent',
  components: {
    Footer,
    Body
  }

  }
</script>



<style scoped>
.background {
  background-image: url('');
  background-size: cover; 
  background-position: center; 
  width: 100%; 
  height: 100vh; 
 
}

</style>