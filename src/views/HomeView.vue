<script setup>
import {RouterView, RouterLink} from 'vue-router';
import { ref } from "vue";
const activeMenu=ref(false)
const toggleMenu =()=>{
  activeMenu.value = !activeMenu.value
 ;
}
 console.log(activeMenu.value)
</script>

<template>
<main @click='activeMenu=false'   class="max-w-[100vw] main xs:landscape:overflow-scroll xs:landscape:pt-48 lg:landscape:pt-0 lg:landscape:overflow-hidden overflow-hidden bg-[url('../assets/assets/home/background-home-mobile.jpg')] 
bg-center bg-no-repeat bg-local bg-cover h-screen text-white 
md:bg-[url('../assets/assets/home/background-home-tablet.jpg')] 
md:bg-center md:bg-no-repeat md:bg-local md:bg-cover md:h-screen 
lg:bg-[url('../assets/assets/home/background-home-desktop.jpg')]  ">

    <section class='font-serif flex flex-col justify-center items-center pt-8 lg:flex-row lg:px-4 h-screen lg:justify-around lg:text-left  lg:pt-12
    xs:pt-6'>
      <div class="textbox flex flex-col items-center gap-6
      xs:h-[40vh] xs:justify-center 
      md:max-w-[70%] 
      md:mt-28 justify-between h-[382px] 
      lg:max-w-[450px] lg:items-start ">
        <h5 class="font-barlow text-babyBlue  leading-[34px] tracking-[2.7px]
        xs:mx-8
        md:text-[24px] md:leading[24px] md:tracking[3.38px]
        lg:mx-0 lg:text-left">So you want to travel to</h5>
        <h2 class="text-[80px] font-belle leading-[100px] tracking-[2.7px] capitalize text-white
        md:text-[150px] md:leading-[150px]
        lg:text-[em]  md:leading-[150px]
        lg:text-left">SPACE</h2>
        <div class="body-text h-[125px] ">
        <p class='text-center font-belle text-babyBlue text-base leading-[25px]
        xs:text-sm xs:mx-4
        md:text-base md:leading-xl
        
        lg:text-left lg:mx-0'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world  experience!</p>

        </div>
       
      </div>
      <div class="box  flex h-100%  items-end justify-center">
        <RouterLink to="/destination">
       <div id="circle-box" class="h-[150px] w-[150px] w-full  mt-[81px] relative rounded-full relative bg-white
       xs:mt-[42px]
       md:w-[242px]  md:h-[242px] md:mt-44
       lg:w-[12em]  lg:h-[12em] lg:translate-y-[-10%]">
        <span class="absolute top-[50%] left-[50%] text-spaceBlue translate-x-[-50%] translate-y-[-50%]">
          <p>EXPLORE</p>
          </span>
          </div>
          </RouterLink>

        </div>
    </section>
      </main>
  
</template>
<style scoped>
#circle-box::after{
  content: ' ';
  
  opacity: 0;
  height: 16rem;
  width: 16rem;
  background: #fff;
  
  position: absolute;
  border-radius: 50%;
  top: -18%;
  left: -16%;
  /* translate: -50% -50%; */
 
  
}
#circle-box:hover::after{
  opacity: 0.1;
   transition: all .5s;
}

</style>
