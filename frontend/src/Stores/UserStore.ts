import { defineStore } from 'pinia';
import { ref } from 'vue';
import { User } from '../Models/User'; 


export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null);
    const isLogged = ref(false);

    const setUser = (newUser: User) => {
        user.value = newUser;
        isLogged.value = true;
    }

    const logout = () => {
        user.value = null;
        isLogged.value = false;
    }

    return {
        user,
        setUser,
        logout
    }

})


