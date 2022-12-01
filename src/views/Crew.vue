<template>
<main class="max-w-[100vw] landscape:overflow-scroll   h-screen overflow-hidden bg-[url('../assets/assets/crew/background-crew-mobile.jpg')] 
bg-center bg-no-repeat bg-local bg-cover h-screen text-white 
md:bg-[url('../assets/assets/crew/background-crew-tablet.jpg')] 
md:bg-center md:bg-no-repeat md:bg-local md:bg-cover md:h-screen 
lg:bg-[url('../assets/assets/crew/background-crew-desktop.jpg')]  ">
    <section v-for="(item, index) in crew" v-show="currentData===index" :key=index class="dataCount pt-12 flex justify-between items-center w-full max-h-screen h-screen xs:flex-col md:flex-col-reverse md:pt-10 lg:flex-row-reverse md:h-full lg:pt-[76px] lg:pl-[38.5px] ">
       
        <div id="celestial-box" class="flex items-center w-full h-[40%] relative flex-col lg:flex-col pt-8   md:pt-[60px] lg:w-[50%]  lg:h-full  lg:pt-0 ">
            <h5 class="md:hidden font-barlow uppercase  text-base flex flex-row leading-[19px] tracking-[2.7px] gap-[18px] 
                        lg:hidden
   ">
                <p class="text-white opacity-[0.25] mix-blend-normal">02</p> Meet your crew

            </h5>
            <transition-group class="relative  md:h-full  md:w-full xs:h-auto xs:w-auto" name="img-slide" appear="" tag="div" >
        
            
            <img  v-for="(item, index) in crew"  :key='index' v-show="currentData==index"  class="xs:max-w-[177px] xs:justify-self- mt-8
              md:absolute bottom-0 lg:right-[50%] lg:translate-x-[50%] md:max-w-[306px] lg:max-w-[326px]   lg:pt-[72px] lg:translate-y-8 " :src='`${crew[index].images.webp}`' alt="">
           
        </transition-group>
         <hr class=" w-screen md:hidden">

            

        </div>
       
        <div id="destinations-info " class='flex flex-col items-center basis-[40%] mt h-[50%] h-[100%]  md:h-[50%]
          md:mt-[53px] lg:basis-[40%] w-full lg:h-[80vh] md:justify-between lg:mt-0 lg:pl-[3em]'>
            <h5 class="font-barlow xs:hidden text-base md:flex flex-row leading-[19px] pl-8
            tracking-[2.7px] gap-[18px] lg:basis-[10%]   
                md:self-start md:text-xl md:leading-24px md:tracking-[3.38px] 
                lg:text-[20px] lg:leading-[34px]
            ">
                <p class="text-white opacity-[0.25] mix-blend-normal">02</p> Meet your Crew

            </h5>
            <div id="celestial-details" class="font-belle h-[32%] mt-8 w-[327px] xs:order-last md:order-1  text-center flex flex-col md:items-center md:w-full
                    md:mt-[29px] md:flex md:items-center md:justify-center md:w-[573px] md:gap-[11px] 

                   lg:w-[] lg:items-start lg:text-left lg:justify-center lg:flex-col lg:h-50% lg:mt-0 lg:gap-0 lg:basis-[80%]">

                <div id="distance" class="  md:w-[]  lg:justify-self-center">
                    <h5 class="font-belle leading-[18px] tracking-[2.3px] text-white opacity-50 uppercase text-[14px] 
                    lg:text-[1.5em] lg:leading-[64px] whitespace-nowrap ">
                        {{crew[index].role}}
                    </h5>
                    <h3 class="pt-[12px] text-[24px] leading-[28px] uppercase 
                    md:leading-[32px] md:inline 
                    lg:text-[2.5em] lg:w-[488px] lg:leading-[64px]  ">
                        {{crew[index].name}}

                    </h3>
                </div>
                <div id="travel-time" class="  md:w-[60%] lg:w-full ">
                    <h5 class="font-barlow leading-[25px] pt-4 tracking-[2.3px] text-babyBlue capitalize text-[15px] text-center w-[full]   md:pt-0 lg:text-left
                    lg:text-[14px] lg:leading-[178%] lg:w-[333px]
                    ">
                        {{crew[index].bio}}
                    </h5>

                </div>

            </div>
            <div class="pagination w-[132px] lg:self-start lg:basis-[10%] lg:order-3">
                <span @click="goToData(index)" v-for="(item, index) in getDataCount" :key="index" class="w-[15px] h-[15px] rounded-full bg-white opacity-[0.17] cursor-pointer hover:opacity-[0.5] " :class="{active: index === currentData}">

                </span>
            </div>
        </div>
    </section>

</main>
</template>

<script setup>
import {
    ref
} from 'vue';
import {
    useDataStore
} from "../store/index.js";
import {
    onMounted
} from 'vue'

const getDataCount = ref(null)

onMounted(() => {
    getDataCount.value = document.querySelectorAll('.dataCount').length
})

const data = useDataStore();
const crew = data.crew
const currentData = ref(0)

const goToData = (index) => {
    currentData.value = index

}
console.log(getDataCount);
</script>

<style>
.pagination {
    display: flex;
    justify-content: space-around;

}

.active {
    background: #fff;
    opacity: 1;

}
.img-slide-enter-from{
    opacity: 0;
    translate: -50% 0%;
}
.img-slide-enter-active{
    transition: all 2s;
}
</style>
