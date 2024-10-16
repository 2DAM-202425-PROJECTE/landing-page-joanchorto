<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
    <div class=" p-8 bg-white text-gray-900 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 class="text-2xl font-bold mb-4">Suscríbete a nuestro Newsletter</h2>
      <p class="mb-4">Recibe las últimas novedades y ofertas exclusivas en tu correo.</p>
      <form @submit.prevent="submitEmail">
        <input
            type="email"
            v-model="email"
            required
            placeholder="Introduce tu correo electrónico"
            class="border border-gray-400 p-2 rounded w-full mb-4"
        />
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Suscribirse</button>
      </form>
      <button @click="closePopup" class="mt-4 text-gray-500 hover:text-gray-700">No me gustan las promociones</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(true);
const email = ref('');

const closePopup = () => {
  isVisible.value = false;
};

const submitEmail = () => {
  // Aquí puedes manejar el envío del correo, por ejemplo, enviarlo a una API.
  console.log(`Email enviado: ${email.value}`);
  email.value = ''; // Limpiar el campo después del envío.
  closePopup(); // Cerrar el popup después de enviar.
};
</script>

<style scoped>
/* Estilos opcionales para el popup */
</style>
