<template>
    <el-container direction="vertical">
        <el-row>
            <el-col :span="8" :offset="8">
                <el-card>
                    <el-form>
                        <el-form-item label="Nom d'utilisateur">
                            <input type="text" v-model="credentials.username" />
                        </el-form-item>

                        <el-form-item label="Mot de passe">
                            <input type="password" v-model="credentials.password" />
                        </el-form-item>
                        <el-button type="info" @click="holderLogin">Se connecter</el-button>
                        <el-button type="info" @click="holderInscription">S'inscrire</el-button>
                    </el-form>
                    <p>{{ error }}</p>
                </el-card>
            </el-col>
        </el-row>
    </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { login, inscription } from '../../Services/UserCalls';
import { User } from '../../Models/User.ts';
import { useUserStore } from '../../Stores/UserStore.ts';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useUserStore();



interface Credentials {
    username: string;
    password: string;
}

const credentials: Credentials = {
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
        console.log(store.user);
        router.push('/');
    } else {
        error.value = "Invalid credentials";
    }
}

const holderInscription = async () => {
    const res = await inscription(credentials.username, credentials.password);
    if (res.status == 200) {
        console.log(res.data);
        const newUser = new User(res.data.id, res.data.username, res.data.token);
        store.setUser(newUser);
        console.log(store.user);
        router.push('/');
    } else {
        error.value = "Invalid credentials";
    }

}


</script>