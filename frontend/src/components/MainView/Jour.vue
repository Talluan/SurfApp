<template>
  <div>Vue des plages en favoris</div>
  
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

            <div> toutes les heures 9 12 15 18</div>
<!-- 
            <div className="googleMap mx-auto mt-2 md:w-[50vw] md:h-[50vh] md:inline-block md:justify-center">
                    <div className="text-white w-full h-full justify-center p-5">
                        
                         <div   className="aspect-video w-full h-full justify-center rounded-lg"
                         src={`https://www.google.com/maps?q=@46.6880479,-1.9413342,14z/&output=embed`}
                         width="auto"
                         height="auto"
                         loading="lazy"
                         referrerPolicy="no-referrer-when-downgrade"
                         title="Google Maps">
                         
                        </div>
                        /*src={`https://www.google.com/maps?q=${latitude},${longitude}&output=embed`} 
                  </div>
                </div>        
    -->
        
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
/*mimizan Longitude : -1°18’,1368 W Latitude : 44°12’,33 N
Biarritz FRALongitude : -1°33’,6 W Latitude : 43°29’,07 N 
Saint-Gilles-Croix-de-Vie FRALongitude : -1°56’,6976 W Latitude : 46°41’,484 N */







</script>

