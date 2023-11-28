<template>
  <Prevision />
</template>

<script setup lang="ts">
import Prevision from '../components/MainView/Prevision.vue';
import { useUserStore } from '../Stores/UserStore.ts';

const store = useUserStore();
</script>
```