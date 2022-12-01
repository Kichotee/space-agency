<template>
<main class="max-w-[100vw]  landscape:overflow-scroll overflow-hidden bg-[url('../assets/assets/technology/background-technology-mobile.jpg')] 
bg-center bg-no-repeat bg-local bg-cover h-screen text-white 
md:bg-[url('../assets/assets/technology/background-technology-tablet.jpg')] 
md:bg-center md:bg-no-repeat md:bg-local md:bg-cover md:h-screen 
lg:bg-[url('../assets/assets/technology/background-technology-desktop.jpg')]  ">

<techComponent/>
</main>

</template>

<script setup>
import techComponent from '../components/technologyComponent.vue'
components:{
    techComponent
}
</script>

<style>

</style>
