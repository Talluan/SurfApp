<template>
    <div class="login">
        <p>Log in to your account</p>
        <input type="text" v-model="credentials.username" placeholder="Username" />
        <input type="password" v-model="credentials.password" placeholder="Password" />
        <button @click="holderLogin">Log in</button>
        <p v-if="error != ''">{{ error }}</p>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { login } from '../../Services/UserCalls';
import { User } from '../../Models/User.ts';
import { useUserStore } from '../../Stores/UserStore.ts';

const store = useUserStore();

interface Credentials {
    username: string;
    password: string;
} 

const credentials : Credentials = {
    username: '',
    password: ''
};

const error = ref("");

const holderLogin = async () => {
    const res = await login(credentials.username, credentials.password);
    if (res.status == 200) {
        console.log(res.data);
        const newUser = new User(res.data.id, res.data.username, res.data.token);
        store.setUser(newUser);
    } else {
        error.value = "Invalid credentials";
    }
}



</script>