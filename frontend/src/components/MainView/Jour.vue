<template>
    <div>Je suis un jour</div>
    <div>sens du vent : {{ sensVent }}</div>
</template>

<script setup lang="ts">

    import { ref } from 'vue';


    const sensVent = ref("Sud");



</script>

