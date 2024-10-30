<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
    <div class=" p-8 bg-white text-gray-900 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 class="text-2xl font-bold mb-4">Suscríbete a nuestro Newsletter</h2>
      <p class="mb-4">Recibe las últimas novedades y ofertas exclusivas en tu correo.</p>
      <form @submit.prevent="suscribir">
        <input
            type="email"
            v-model="email"
            required
            placeholder="Introduce tu correo electrónico"
            class="border border-gray-400 p-2 rounded w-full mb-4"
        />
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Suscribirse</button>
      </form>
      <button @click="cerrarPopup" class="mt-4 text-gray-500 hover:text-gray-700">No me gustan las promociones</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { guardarCorreo } from '/firebase.js'; // Importar la función para guardar el correo

export default {
  setup() {
    const email = ref('');
    const isVisible = ref(true); // Controlar la visibilidad del popup

    const suscribir = async () => {
      if (validarEmail(email.value)) {
        await guardarCorreo(email.value);
        email.value = ''; // Limpiar el campo
        alert("Te has suscrito exitosamente!");
        cerrarPopup(); // Cerrar el popup tras suscribirse
      } else {
        alert("Por favor, introduce un correo electrónico válido.");
      }
    };

    const validarEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email); // Validar el formato del correo
    };

    const cerrarPopup = () => {
      isVisible.value = false; // Cambiar la visibilidad del popup
      // Aquí podrías almacenar la elección del usuario en cookies o localStorage si es necesario
    };

    return {
      email,
      isVisible,
      suscribir,
      cerrarPopup
    };
  }
};
</script>

<style scoped>
/* Estilos opcionales para el popup */
</style>
