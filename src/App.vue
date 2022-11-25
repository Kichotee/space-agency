<script setup>
import { RouterLink, RouterView } from "vue-router";


</script>

<template>

  
   

    <div  class="relative text-babyBlue">
      

      <nav class="flex absolute  justify-between px-6 font-belle text-lg   w-screen lg:px-12
        ">
        <img src="./assets/assets/shared/logo.svg" class="mt-6 items-center w-8" alt="">
        <span class=" hidden lg:block h-1 color-whiteFade w-[40%] absolute bottom-10% left-8"></span>
        <div class="links hidden text-sm leading-[17px] tracking-[2.4px] absolute top-0 right-0 w-[60%] h-[64px] items-center 
        justify-start pl-6 lg:pl-[123px] h-50 md:flex gap-8  md:bg-whiteFade backdrop-blur-4xl font-barlow ;
]">
          <RouterLink class=" active:border-b" to="/"><span class="hidden lg:inline font-bold text-white">00</span> Home</RouterLink>
        <RouterLink  class=" active:border-b" to="/about"><span class="hidden lg:inline font-bold text-white pr-[14px] ">01</span>Destination</RouterLink>
         <RouterLink  class=" active:border-b" to="/Crew"><span class="hidden lg:inline font-bold text-white pr-[14px]">02</span>Crew</RouterLink>
          <RouterLink  class=" active:border-b" to="/about"><span class="hidden lg:inline font-bold text-white pr-[14px]">03</span>Technology</RouterLink>
        </div>
        <img class="md:hidden mt-6  self-center" src="./assets/assets/shared/icon-hamburger.svg" alt="">
      </nav>
    </div>
  

  <RouterView />

</template>

<style src='../src/assets/main.css'/>


