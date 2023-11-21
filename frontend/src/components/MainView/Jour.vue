<template>
    <div>Je suis un jour</div>

  <el-space direction="horizontal">
    <el-card v-for="i in 3" :key="i" class="box-card" style="width: auto">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div  class="text item">
        <p>sens du vent : {{ sensVent }} la force du vent : {{ forceVent }}</p>
        <p>la hauteur de la houle : {{ hauteurHoule }} intervalle  de la houle : {{ intervalleHoule }}</p>
        <p>la hauteur de la houle : {{ hauteurHoule }} intervalle  de la houle : {{ intervalleHoule }}</p>
        <p>La température extérieur : {{ tempExterieur }} La température de l'eau : {{ tempEaux }}</p>
        
      </div>
    </el-card>
  </el-space>





 <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex">
        <a href="#">
            <img class="rounded-t-lg" src="https://erikflowers.github.io/weather-icons/wi-yahoo-0: tornado " alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ conditionsSurf }}</h5>
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="">
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">sens du vent : {{ sensVent }} la force du vent : {{ forceVent }}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">la hauteur de la houle : {{ hauteurHoule }} intervalle  de la houle : {{ intervalleHoule }}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">la hauteur de la houle : {{ hauteurHoule }} intervalle  de la houle : {{ intervalleHoule }}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">La température extérieur : {{ tempExterieur }} La température de l'eau : {{ tempEaux }}</p>
        
        </div>

           <!--  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> -->

            <div> toutes les heures 9 12 15 18</div>
        
 </div>
</template>

<script setup lang="ts">

    import { ref } from 'vue';
    //import Chart from 'chart.js/auto';
    const sensVent = ref("Sud");
    const forceVent=  ref("4");
    const hauteurHoule = ref("1m");
    const intervalleHoule = ref("12s");
    const tempExterieur = ref("17°C");
    const tempEaux = ref ("14°C");
    const conditionsSurf = ref ("poor");
    const lat = 58.7984;
    const lng = 17.8081;
    
 /*     const params = 'time,windSpeed,waveHeight,airTemperature,waterTemperature,windDirection,windWavePeriod';
     fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
     headers: {
     'Authorization': 'd7dd31c8-830f-11ee-84c8-0242ac130002-d7dd324a-830f-11ee-84c8-0242ac130002'
     }
     }).then((response) => response.json()).then((jsonData) => {
  */
    
//https://erikflowers.github.io/weather-icons/
//https://api.meteo-concept.com/api/forecast/surf/daily/0?latlng=48.086%2C-2.635&id=94a5b291-5043-4e60-a094-ad02c21cae00

//https://api.meteo-concept.com/api/forecast/surf/daily/0?latlng=48.086%2C-2.635&id=94a5b291-5043-4e60-a094-ad02c21cae000?token=68114671c02dab5f463d21df3701042410766346ceaa68040f1f4e7f5b0d846b

// https://dashboard.stormglass.io/confirmed
// d7dd31c8-830f-11ee-84c8-0242ac130002-d7dd324a-830f-11ee-84c8-0242ac130002




</script>

