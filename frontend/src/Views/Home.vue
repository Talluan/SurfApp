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
import PlageModel from "../Models/Plage.ts";
import Card from '../components/MainView/Card.vue';
import { getPlages } from '../Services/PlageCalls.ts';
import { ref } from 'vue';


const plages = ref();

const fetchPlages = async () => {
	try {
		const response : any = await getPlages();
		if (response && response.data) {
			plages.value = PlageModel.fromArray(response.data);
		}
	} catch (error) {
		console.error(error);
	}
};


fetchPlages();

</script>



<style scoped></style>