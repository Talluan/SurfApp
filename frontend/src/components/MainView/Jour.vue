<template>
    <div>Je suis un jour</div>

      
        <!-- <img src="/Surfometer/SurfDayImage?dayNumber=-20231114&amp;spotName=ST_GILLES_CROIX_VIE&amp;width=47&amp;height=300&amp;Options=" alt="" title="" width="47" height="300"> -->
        <div class="flex items-left">{{  conditionsSurf }}</div>
        <div> toutes les heures 9 12 15 18</div>
        <div> le vent     
            <p>sens du vent : {{ sensVent }}</p>
            <p>la force du vent : {{ forceVent }}</p>
        </div>
        <div> La houle
            <p>la hauteur de la houle : {{ hauteurHoule }}</p>
            <p>intervalle houle : {{ intervalleHoule }}</p>
        </div>
        <div> Température
            <p> La température extérieur : {{ tempExterieur }}</p>
            <p> La température de l'eau : {{ tempEaux }}</p>
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



    // const params = 'windSpeed';

//https://erikflowers.github.io/weather-icons/
//https://api.meteo-concept.com/api/forecast/surf/daily/0?latlng=48.086%2C-2.635&id=94a5b291-5043-4e60-a094-ad02c21cae00

//https://api.meteo-concept.com/api/forecast/surf/daily/0?latlng=48.086%2C-2.635&id=94a5b291-5043-4e60-a094-ad02c21cae000?token=68114671c02dab5f463d21df3701042410766346ceaa68040f1f4e7f5b0d846b

// https://dashboard.stormglass.io/confirmed
// d7dd31c8-830f-11ee-84c8-0242ac130002-d7dd324a-830f-11ee-84c8-0242ac130002



    // fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
    // headers: {
    // 'Authorization': 'd7dd31c8-830f-11ee-84c8-0242ac130002-d7dd324a-830f-11ee-84c8-0242ac130002'
    // }
    // }).then((response) => response.json()).then((jsonData) => {
    // // Do something with response data.
    // });

</script>

