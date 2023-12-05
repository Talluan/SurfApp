import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import Plage from '../Models/Plage'; 
import { getPlages } from '../Services/PlageCalls';


export const usePlagesStore = defineStore('plages', () => {


    const plages = ref<Plage[] | null>(null);

    const setPlages = (newPlages: Plage[]) => {
        plages.value = newPlages;
    }

    onMounted(async () => {
        const response = await getPlages();
        if (response.status === 200) {
            setPlages(response.data);
        }
    })


    return {
        plages,
        setPlages
    }
})


