<template>
	<div id="app">
		<div class="beach-info">
			<h1>{{ plage?.nom }}</h1>
			<p>{{ plage?.location }}</p>
			<p>{{ plage?.description }}</p>
		</div>
		<div class="weather-forecast">
			<h2>Prévisions Météorologiques</h2>
		<div>
			<p>Date {{ prevision?.date }}</p>
			<p>Direction des vagues {{ prevision?.waveDirection }} °C</p>
			<p>Hauteur des vagues {{ prevision?.waveHeight }}</p>
			<p>Période des vagues {{ prevision?.wavePeriod }}</p>
			<p>Direction du vent {{ prevision?.windWaveDirection }}</p>
			<p>Hauteur du vent {{ prevision?.windWaveHeight }}</p>
			<p>Période du vent {{ prevision?.windWavePeriod }}</p>
		</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { usePlagesStore } from '../Stores/PlageStore.ts';
import Plage from '../Models/Plage.ts';
import { ref, onMounted } from 'vue';
import router from '../router.ts';
import { getWeather, getMarine } from "../Services/PrevisionMeteoCalls";
import Prevision from "../Models/Prevision.ts";


const plageStore = usePlagesStore();


const prevision = ref<Prevision>();
const id = ref(router.currentRoute.value.params.id);
const plage = ref<Plage>();

const getPrevisions = async () => {
	try {
		// const weatherResults = await getWeather(plage.value);
		const marineResults = await getMarine(plage.value);
		// console.log(weatherResults);
		console.log(marineResults);
		prevision.value = Prevision.fromApiData(marineResults.daily);
	} catch (error) {
		console.log(error);
	}
}

if (plageStore.plages && id.value) {
		plage.value = plageStore.plages.find((p) => p.id == id.value);
		getPrevisions();
	} else {
		router.push('/');
	}

onMounted(() => {
	if (!id) {
		router.push('/');
	}

});

</script>

<style scoped>
#app {
	display: flex;
}

.beach-info {
	flex: 1;
	padding: 20px;
}

.weather-forecast {
	flex: 1;
	padding: 20px;
	border-left: 1px solid #ccc;
}

.forecast-item {
	margin-bottom: 15px;
}
</style>