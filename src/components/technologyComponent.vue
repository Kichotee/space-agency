<template>
<section v-for="(item, index) in technology" v-show="currentData===index" :key='index' class="dataCount pt-8 h-100vh object:cover">
    <div class="box-1 flex flex-col items-center h-[40vh] justify-center gap-[8%] ">
        <div class="header-text">
            <h5 class="md:hidden font-barlow uppercase text-base flex flex-row leading-[19px] tracking-[2.7px] gap-[18px] 
                        lg:hidden
   ">
                <p class="text-white opacity-[0.25] mix-blend-normal ">03</p>Space launch 001

            </h5>
        </div>
        <div id="img-box">
            <img :src="`${technology[currentData].images.landscape}`" alt="">
        </div>

    </div>
     <div class="pagination w-full lg:self-start flex justify-center h-[5vh]  gap-4 lg:basis-[10%] lg:order-3">
                <span @click="goToData(index)" v-for="(item, index) in getDataCount" :key="index" 
                class="w-[40px] h-[40px] rounded-full bg-transparent border opacity-[0.25] flex items-center justify-center  text-base  cursor-pointer " 
                :class="{active: index === currentData}">
                {{ index +1 }}
                </span>
    </div>

    <div class="box-2 font-belle flex flex-col h-[40vh] justify-start mt-8 text-center gap-4 w-screen px-6">
        <div class=" header-text">
         <p class="font-barlow text-[14px] leading-[16.8px] tracking-[2.37px] uppercase  ">The terminology</p>
           
            <h5 class="uppercase text-xl leading-[28px] pt-2"> 
                {{item.name}}
            </h5>
        </div>
        <div class="description text-[15px] leading-[25px]">
            <p>
                {{item.description}}
            </p>
        </div>
    </div>

</section>
</template>

<script setup>
import {
    ref, onMounted
} from 'vue';
import {
    useDataStore
} from "../store/index.js";
const data = useDataStore();
const technology = data.technology
const currentData = ref(0)
const getDataCount = ref(null)
const goToData = (index) => {
    currentData.value = index

}
onMounted(() => {
    getDataCount.value = document.querySelectorAll('.dataCount').length
})
console.log(technology);
</script>

<style>
.active {
    background: #fff;
    opacity: 1;
    color: #0B0D17;

}

</style>
