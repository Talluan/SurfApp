<template>
	<el-main>
		<el-carousel :interval="4000" arrow="always" indicator-position="outside" style="height: auto;">
			<el-carousel-item v-for="plage in plages" :key="plage.id">
				<card :plage="plage" />
			</el-carousel-item>
		</el-carousel>
	</el-main>
</template>

<script setup lang="ts">
import { usePlagesStore } from '../Stores/PlageStore.ts';
import PlageModel from "../Models/Plage.ts";
import Card from '../components/MainView/Card.vue';
import { getPlages } from '../Services/PlageCalls.ts';
import { ref, onMounted } from 'vue';

const plageStore = usePlagesStore();

const plages = ref();

const fetchPlages = async () => {
	try {
		const response : any = await getPlages();
		if (response && response.data) {
			plages.value = PlageModel.fromArray(response.data);
			plageStore.setPlages(plages.value);
		}
	} catch (error) {
		console.error(error);
	}
};

onMounted(() => {
	fetchPlages();
});

</script>



<style scoped></style>