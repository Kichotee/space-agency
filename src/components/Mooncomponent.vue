<template>
<section class="pt-12 flex h-max   items-center w-full px-[19.25px] flex-col md:pt-10 lg:flex-row lg:h-full lg:pt-[76px] ">
    <div id="celestial-box" class="flex items-center w-full flex-col  pt-8 gap-12 md:pt-[60px]   lg:pt-0 ">
        <h5 class="font-barlow  text-base flex flex-row leading-[19px] tracking-[2.7px] gap-[18px] 
    md:self-start md:text-xl md:leading-24px md:tracking-[3.38px] 
    lg:pl-[127.5px]
   ">
            <p class="text-white opacity-[0.25] mix-blend-normal">01</p> Pick your Location

        </h5>
        <transition-group name="object" appear>
            <img v-for="(item, index) in destinations" v-show="currentData==index" :key='index' class="  xs:w-[170px] md:w-[300px] lg:w-[50%]  " :src='`${destinations[currentData].images.webp}`' alt="">
        </transition-group>

    </div>

    <div id="destinations-info " class='flex flex-col items-center mt-6  md:mt-[53px]  w-full lg:w-[40%] lg:mt-8 '>
        <ul class="font-barlow flex w-[60%] self-  items-center justify-between text-[14px] leading-[17px] gap-4  tracking-[2.3px]  
 md:text-base md:tracking-[2.7px] leading-[19px] md:w-[40%]
  lg:items-start lg:w-full lg:justify-start lg:gap-8 lg:pt-[12px] lg:text-[12px]">
            <li @click="currentData=0" class="cursor-pointer " :class='{activeDest: currentData===0}'> Moon</li>
            <li @click="currentData=1" class="cursor-pointer " :class='{activeDest: currentData===1}'>Mars</li>
            <li @click="currentData=2" class="cursor-pointer" :class='{activeDest: currentData===2}'>Europa</li>
            <li @click="currentData=3" class="cursor-pointer" :class='{activeDest: currentData===3}'>Titan</li>

        </ul>
        <div class="font-belle font-normal w-[327px] overflow-hidden mt-5 text-center description md:w-[573px]  md:mt-[32px] lg:mt-[0] lg:text-left lg:w-[80%] self-center lg:self-start ">

            <h2 class="text-[56px] md:text-[80px] lg:text-left lg:text-[5em] lg:leading-[115px] uppercase ">

                {{destinations[currentData].name}}

            </h2>
            <transition-group name="textAnimate" mode="out-in">
                <p v-for="(item, index) in destinations" v-show="currentData==index" :key='index' class="font-barlow leading-[25px] text-[15px] 
    md:text-base md:leading-[28px] md:mt-2
    lg:font-[18px] ">
                    {{destinations[currentData].description}}

                </p>
            </transition-group>
            <hr class="w-full text-[#383B4B] mt-8">

        </div>

        <div id="celestial-details" class="font-barlow mt-8 w-[216px] text-center lg:text-left 
  md:mt-[49px] md:flex md:items-center md:justify-center md:w-[573px] md:gap-[11px] 
  lg:items-start lg:justify-start lg:text-left lg:w-[100%] lg:mt-4 ">
   <transition-group name="textAnimateUp">
            <div v-for="(item, index) in destinations" v-show="currentData==index" :key='index' id="distance" class="  md:w-[216px] ">

               
                    <h5 class="font-barlow leading-[17px] tracking-[2.3px] text-babyBlue uppercase text-[14px]  ">
                        Avg Distance
                    </h5>
                    <h3 class="pt-[12px] text-[20px] md:leading-[32px] md:inline">
                        {{destinations[currentData].distance}}

                    </h3>


            </div>
                </transition-group >

            <transition-group name="textAnimateUp">

                  <div v-for="(item, index) in destinations" v-show="currentData==index" :key='index' id="travel-time" class=" md:w-[216px] ">
                <h5 class="font-barlow leading-[17px] pt-8 tracking-[2.3px] text-babyBlue uppercase text-[14px]    md:pt-0">
                    Est. travel time
                </h5>
                <h3 class="pt-[12px] text-[20px] md:leading-[32px] md:pt-0">
                    {{destinations[currentData].travel}}

                </h3>
            </div>
                </transition-group>

            

        </div>

    </div>

</section>
</template>

<script setup>
import {
    ref
} from 'vue';
import {
    useDataStore
} from "../store/index.js";
const data = useDataStore();
const destinations = data.destinations
const currentData = ref(0);
const goToData = (index) => {
    currentData.value = index

}
</script>

<style>
.object-enter-from,
.object-leave-to {

    translate: -200% 0;
    /* scale: 0.1; */
    transform-origin: right center;
}

.object-enter-active {
    transition: 2s;
}

.textAnimate-enter-from
 {
    translate: 100%;
}

.textAnimate-enter-active

 {
    transition: all 2s;
}
.textAnimateUp-enter-from{
  translate: 0 200%;
}
.textAnimateUp-enter-active{
  transition: all 1s;
}
</style>
