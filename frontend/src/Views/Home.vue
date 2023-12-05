<template>
	<el-main>
		<el-carousel :interval="4000" arrow="always" indicator-position="outside" style="height: auto;">
			<el-carousel-item v-for="plage in plageStore.plages" :key="plage.id">
				<card :plage="plage" />
			</el-carousel-item>
		</el-carousel>
	</el-main>
</template>

<script setup lang="ts">
import { usePlagesStore } from '../Stores/PlageStore.ts';
import Card from '../components/MainView/Card.vue';

const plageStore = usePlagesStore();




</script>



<style scoped></style>