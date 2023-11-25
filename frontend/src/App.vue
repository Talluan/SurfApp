<script setup lang="ts">
import Prevision from './components/MainView/Prevision.vue';
</script>

<template>
  <el-header>
    <el-menu mode="horizontal" :ellipsis="false">
      <el-menu-item index="1">SurfApp Etudiant</el-menu-item>

      <article class="flex-grow" />
      <el-menu-item index="2">
      <el-input v-model="input" class="w-100 m-2" size="large" placeholder="Beach" prefix-icon="Search"
        style="width: 600px"></el-input>
      <el-button type="primary" size="large" icon="Search" color="#636466">Search</el-button>
    </el-menu-item>
    
    <el-menu-item index="3-1">Course</el-menu-item>
    <el-menu-item index="3-2">Se déconnecter</el-menu-item>
    <el-menu-item index="3-3">Se connecter</el-menu-item>
    </el-menu>
  </el-header>
  <el-container>
      <img  src="/public/surfmap-header.jpeg"  />
  </el-container>

  <Prevision />

</template> 

<!-- <script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

//const loggedIn = computed(() => store.getters.loggedIn);

 const logout = () => {
    store.dispatch('logout');
    router.push({ name: 'Login' });
};
 
 </script> -->

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
