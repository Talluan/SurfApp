<template>
	<div id="app">
		<div class="beach-info">
			<el-button type="success" @click="handleLike">Ajouter cette plage aux favoris</el-button>
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
			<p>Temps {{ prevision?.weatherCode }}</p>
			<p>Vitesse du vent {{ prevision?.windSpeed }}</p>
			<p>Précipitation {{ prevision?.precipitation }}</p>
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
import { likePlage } from "../Services/PlageCalls.ts" 
import { useUserStore } from '../Stores/UserStore';


const plageStore = usePlagesStore();
const userStore = useUserStore();


const prevision = ref<Prevision>();
const id = ref(router.currentRoute.value.params.id);
const plage = ref<Plage>();

const extractDataFromCalls = async () => {
	const weatherResults = await getWeather(plage.value);
	const marineResults = await getMarine(plage.value);
	const data = {
		time: weatherResults.current.time,
		temperature2m: weatherResults.current.temperature2m,
		windSpeed10m: weatherResults.current.windSpeed10m,
		weatherCode: weatherResults.current.weatherCode,
		precipitation: weatherResults.current.precipitation,
		waveDirectionDominant: marineResults.daily.waveDirectionDominant,
		waveHeightMax: marineResults.daily.waveHeightMax,
		wavePeriodMax: marineResults.daily.wavePeriodMax
	}
	return Prevision.fromApiData(data);
}

const getPrevisions = async () => {
	try {
		prevision.value = await extractDataFromCalls();
	} catch (error) {
		console.log(error);
	}
}

const handleLike = async () => {
	try {
		console.log("handleLike");
		if (userStore.user?.token) {
			const res = await likePlage(plage.value?.id, userStore.user?.token);
			console.log(res);
		}
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