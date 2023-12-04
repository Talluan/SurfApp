<template>
	<div id="app">
		<div class="beach-info">
			<h1>{{ plage.name }}</h1>
			<p>{{ plage.location }}</p>
			<p>{{ plage.description }}</p>
		</div>
		<div class="weather-forecast">
			<h2>Prévisions Météorologiques</h2>
			<div v-for="(forecast, index) in weatherForecasts" :key="index" class="forecast-item">
				<p>{{ forecast.date }}</p>
				<p>{{ forecast.temperature }} °C</p>
				<p>{{ forecast.weatherCondition }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Plage from '../Models/Plage.ts';
import PrevisionMeteo from '../Models/Prevision.ts';
import { ref } from 'vue';


const props = defineProps({
	plage: { type: Plage, required: true },
});

const plage = ref<Plage>(props.plage);

const prevision = new PrevisionMeteo();


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