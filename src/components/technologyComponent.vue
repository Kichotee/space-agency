<template>
<section v-for="(item, index) in technology" v-show="currentData==index" :key='index' class="dataCount pt-12 h-full object:cover md:pt-16  lg:flex lg:flex-row lg:items-center gap-[80px]">
    <div class="box-1 flex flex-col items-center h-[40vh] justify-center gap-[8%] lg:order-2 ">
        <div class="header-text md:self-start md:pl-6">
            <h5 class=" font-barlow uppercase text-base flex flex-row leading-[19px] tracking-[2.7px] gap-[18px] 
                        lg:hidden
   ">
                <p class="text-white opacity-[0.25] mix-blend-normal ">03</p>Space launch 001

            </h5>
        </div>
        <transition-group name="img-transition" appear="" tag="div" >
        
            <img class="lg:hidden"  v-for="(item, index) in technology"  :key='index' v-show="currentData==index" :src="`${technology[currentData].images.landscape}`" alt="">
            <img class=" hidden lg:block"  v-for="(item, index) in technology"  :key='index' v-show="currentData==index" :src="`${technology[currentData].images.portrait}`" alt="">
            
        
        </transition-group>

    </div>
      <div class="pagination w-full  flex justify-center h-[5vh]  gap-4 lg:basis-[10%] 
           lg:flex-col lg:pl-12  lg:w-1/6 lg:h-[40vh] lg:order-first">
                <span @click="goToData(index)" v-for="(item, index) in getDataCount" :key="index" 
                class="w-[40px] h-[40px] rounded-full bg-transparent border opacity-[0.25] flex items-center justify-center  text-base  cursor-pointer hover:opacity-[0.5] " 
                :class="{active: index === currentData}">
                {{ index +1 }}
                </span>
    </div>
  

    <div class="box-2 font-belle flex flex-col h-[40vh] justify-start mt-8 text-center gap-4 w-screen px-6 lg:w-[50%] lg:text-left lg:justify-center ">
         
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
.img-transition-enter-from{
    opacity: 0;
    translate: 100% 0;
    
}
.img-transition-enter-active{
    transition: all 1s;
    
}
</style>
