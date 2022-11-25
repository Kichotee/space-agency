<template>
<main class="max-w-[100vw]   overflow-hidden bg-[url('../assets/assets/crew/background-crew-mobile.jpg')] 
bg-center bg-no-repeat bg-local bg-cover h-screen text-white 
md:bg-[url('../assets/assets/crew/background-crew-tablet.jpg')] 
md:bg-center md:bg-no-repeat md:bg-local md:bg-cover md:h-screen 
lg:bg-[url('../assets/assets/crew/background-crew-desktop.jpg')]  ">
    <section v-for="(item, index) in crew" v-show="currentData===index" :key=index class="dataCount pt-12 flex items-center w-full xs:flex-col md:pt-10 lg:flex-row-reverse lg:h-full lg:pt-[76px] lg:pl-[38.5px] ">
        <transition name="img-slide" appear="">
        <div id="celestial-box" class="flex items-center w-full flex-col lg:flex-col pt-8 gap-8 md:pt-[60px] lg:w-[50%]    lg:pt-0 ">
            <h5 class="md:hidden font-barlow  text-base flex flex-row leading-[19px] tracking-[2.7px] gap-[18px] 
                        lg:hidden
   ">
                <p class="text-white opacity-[0.25] mix-blend-normal">01</p> Pick your Location

            </h5>

            <img class="  xs:w-[177px] xs:translate-y-8 md:w-[300px] lg:w-[568px]  lg:pt-[72px] lg:translate-y-8 " :src='`src/assets/${crew[index].images.webp}`' alt="">
            <hr class="w-screen md:hidden">

        </div>
        </transition>
        <div id="destinations-info " class='flex flex-col items-center mt-6  
          md:mt-[53px] lg:basis-[40%] w-full lg:h-[80vh] lg:justify-center '>
            <h5 class="font-barlow xs:hidden text-base md:flex flex-row leading-[19px] 
            tracking-[2.7px] gap-[18px] lg:basis-[30%]  lg:pt-[10%] 
                md:self-start md:text-xl md:leading-24px md:tracking-[3.38px] 
                lg:pt-0 lg:text-[28px] lg:leading-[34px]
            ">
                <p class="text-white opacity-[0.25] mix-blend-normal">02</p> Meet your Crew

            </h5>
            <div id="celestial-details" class="font-belle mt-8 w-[327px] text-center 
                    md:mt-[49px] md:flex md:items-center md:justify-center md:w-[573px] md:gap-[11px] 
                    lg:items-start lg:text-left lg:justify-center lg:flex-col lg:h-full  ">

                <div id="distance" class="  md:w-[216px] lg:justify-self-center">
                    <h5 class="font-belle leading-[18px] tracking-[2.3px] text-white opacity-50 uppercase text-[14px] 
                    lg:text-[36px] lg:leading-[64px] whitespace-nowrap ">
                        {{crew[index].role}}
                    </h5>
                    <h3 class="pt-[12px] text-[24px] leading-[28px] uppercase 
                    md:leading-[32px] md:inline 
                    lg:text-[56px] lg:w-[488px] lg:leading-[64px] whitespace-nowrap">
                        {{crew[index].name}}

                    </h3>
                </div>
                <div id="travel-time" class="  md:w-[216px] ">
                    <h5 class="font-barlow leading-[25px] pt-4 tracking-[2.3px] text-babyBlue capitalize text-[15px] text-center w-[327px]   md:pt-0 lg:text-left
                    lg:text-[18px] lg:leading-[178%] lg:w-[444px]
                    ">
                        {{crew[index].bio}}
                    </h5>
                    <h3 class="pt-[12px] text-[28px] md:leading-[32px] md:pt-0">

                    </h3>
                </div>

            </div>
            <div class="pagination w-[132px]">
                <span @click="goToData(index)" v-for="(item, index) in getDataCount" :key="index" class="w-[15px] h-[15px] rounded-full bg-white opacity-[0.17] cursor-pointer " :class="{active: index === currentData}">

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
}
.img-slide-enter-active{
    transition: all 1s;
}
</style>
