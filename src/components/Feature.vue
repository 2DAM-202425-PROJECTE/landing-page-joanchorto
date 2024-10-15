<template>
  <div class="bg-white shadow-lg rounded-lg p-6 flex items-start transition-transform transform hover:scale-105">
    <img :src="icon" alt="" class="w-12 h-12 mr-4" /> <!-- Imagen del ícono -->
    <div class="justify-center items-start text-start">
      <h3 class="text-xl font-semibold text-blue-500 mb-2">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  icon: String // Añadido para recibir la imagen del ícono
});
</script>

<style scoped>
/* Estilos personalizados para el componente Feature si es necesario */
</style>
