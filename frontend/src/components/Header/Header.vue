<template>
	<el-header>
		<el-menu mode="horizontal" :ellipsis="false">
			<el-menu-item index="1"><router-link to="/">SurfApp Etudiant</router-link></el-menu-item>

			<article class="flex-grow" />
			<el-menu-item index="2">
				<el-select-v2 v-model="selectedPlage" filterable :options="options"
					placeholder="Please select" style="width: 240px; margin-right: 16px; vertical-align: middle" />
				<el-button type="primary" size="large" icon="Search" color="#636466" @click="handleSearch">Search</el-button>
			</el-menu-item>
			<router-link to="/plage"><el-menu-item index="3-2">Mes plages</el-menu-item></router-link>
			<el-menu-item index="3-2" @click="logout" v-if="store.user != null">Se déconnecter</el-menu-item>
			<el-menu-item index="3-3" v-else><router-link to="/login">Se connecter</router-link></el-menu-item>
		</el-menu>
	</el-header>
	<el-container>	
		<img src="/surfmap-header.jpeg" />
	</el-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
import { useUserStore } from '../../Stores/UserStore.ts';
import { usePlagesStore } from '../../Stores/PlageStore.ts';
import PlageModel from '../../Models/Plage';
import { ref, computed } from 'vue';


const store = useUserStore();
const plageStore = usePlagesStore();
const selectedPlage = ref<PlageModel>();

const options = computed(() => plageStore.plages?.map((plage) => ({
	value: plage.id,
	label: plage.nom,
}))|| []);

const handleSearch = () => {
	console.log(selectedPlage.value);
	router.push({path: '/plage/' + selectedPlage.value});
}


const logout = () => {
	console.log('logout');
	store.logout();
	router.push('/');
}


</script>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.flex-grow {
	flex-grow: 1;
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
