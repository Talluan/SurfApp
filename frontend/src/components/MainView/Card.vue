<template>
	<el-card :body-style="{ padding: '10px' }" style="height: auto;">
	  <div style="text-align: center; margin-top: 10px;">
		<h3>{{ plage.name }}</h3>
		<p>{{ plage.location }}</p>
		<p>{{ plage.description }}</p>
	  </div>
	  <div style="text-align: center; margin-top: 10px;">
		<el-button type="primary" @click="voirDetails">Voir détails</el-button>
	  </div>
	</el-card>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue';
import Plage from '../../Models/Plage.ts';

const props = defineProps({
	plage: { type: Plage, required: true },
});

const plage = ref<Plage>(props.plage);

console.log(plage.value);


const voirDetails = () => {
	
};
</script>
  
<style scoped>

/* Ajoutez vos styles CSS spécifiques au composant ici */
</style>