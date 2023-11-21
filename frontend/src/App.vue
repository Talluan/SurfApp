<script setup lang="ts">
import Prevision from './components/MainView/Prevision.vue';
</script>

<template>
  <el-header>
    <el-menu mode="horizontal" :ellipsis="false">
            <el-menu-item index="0">SurfApp Etudiant</el-menu-item>

            <article class="flex-grow"/>
  
            <el-input v-model="textarea" rows="1" type="textarea" placeholder="Please input"></el-input>
            <el-menu-item index="1">Course</el-menu-item>
            <el-menu-item index="2">Se déconnecter</el-menu-item>
            <el-menu-item index="3">Se connecter</el-menu-item>
        </el-menu>
  </el-header>

 <Prevision /></template> 


<style scoped>.logo {
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
}</style>
