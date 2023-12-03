<template>
	<Header />
	<router-view></router-view>
</template> 

<script setup>
import Header from './components/Header/Header.vue';
import { computed } from 'vue';

import { useRouter } from 'vue-router';
const router = useRouter();
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
