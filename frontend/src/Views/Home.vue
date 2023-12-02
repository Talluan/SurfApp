<template>
	<Plage  />
</template>

<script setup lang="ts">
import Plage from '../components/Plage/Plage.vue';
import { useUserStore } from '../Stores/UserStore.ts';
import PlageModel from "../Models/Plage.ts";

const LePorge = new PlageModel(
	1,
	"Le Porge",
	"Gironde",
	44.8,
	-1.1,
	"Découvrez la magnifique plage du Porge, située sur la côte atlantique. Profitez du sable fin, des vagues apaisantes et de la beauté naturelle environnante. Un lieu idéal pour se détendre et profiter du soleil.",
	"/images/leporge.jpg"
);

const Mimizan = new PlageModel(
	2,
	"Mimizan",
	"Landes",
	44.2,
	-1.3,
	"La plage de Mimizan est une plage de sable fin située sur la côte atlantique. Elle est idéale pour les familles avec enfants car elle est peu profonde et il y a beaucoup d'activités à faire. La plage est également populaire auprès des surfeurs et des bodyboarders.",
	"/images/mimizan.jpg"
);

const Lacanau = new PlageModel(
	3,
	"Lacanau",
	"Gironde",
	44.98,
	-1.2,
	"Lacanau est une station balnéaire populaire en France, située sur la côte atlantique. C'est un endroit idéal pour les familles et les couples qui veulent passer des vacances reposantes. La plage est large et sablonneuse avec de l'eau peu profonde, ce qui la rend parfaite pour les enfants. Il y a aussi beaucoup de bars et de restaurants le long de la plage où vous pourrez déguster des fruits de mer frais ou siroter un cocktail au coucher du soleil.",
	"/images/lacanau.jpg"
);



const store = useUserStore();
</script>
```