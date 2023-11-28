import { defineStore } from 'pinia';
import { ref } from 'vue';
import { User } from '../Models/User'; 


export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null);

    const setUser = (newUser: User) => {
        user.value = newUser;
    }

    const logout = () => {
        user.value = null;
    }

    return {
        user,
        setUser,
        logout
    }

})


