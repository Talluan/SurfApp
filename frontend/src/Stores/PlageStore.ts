import { defineStore } from 'pinia';
import { ref } from 'vue';
import Plage from '../Models/Plage'; 


export const usePlagesStore = defineStore('plages', () => {
    const plages = ref<Plage[] | null>(null);

    const setPlages = (newPlages: Plage[]) => {
        plages.value = newPlages;
    }

    return {
        plages,
        setPlages
    }
})


