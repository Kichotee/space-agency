<template>
  
   <main  class="max-w-[100vw]   overflow-none bg-[url('../assets/assets/destination/background-destination-mobile.jpg')] 
bg-center bg-no-repeat bg-local bg-cover h-screen text-white 
md:bg-[url('../assets/assets/destination/background-destination-tablet.jpg')] 
md:bg-center md:bg-no-repeat md:bg-local md:bg-cover md:h-screen 
lg:bg-[url('../assets/assets/destination/background-destination-desktop.jpg')]  ">

<mooncomponent/>

   </main>
  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script  setup>
import mooncomponent from '../components/Mooncomponent.vue'
import { useDataStore } from "../store/index.js";
components:{
  mooncomponent
}
const data = useDataStore();
const destinations= data.destinations
// import Moon from destinations[0].images.png
// `../assets/${destinations[0].images.png}`

</script>
