<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

// Lógica para el envío del formulario de login
const handleLogin = async () => {
  try {
    // Aquí puedes agregar la lógica para enviar el login al servidor
    console.log('Iniciando sesión:', { email: email.value, password: password.value });
    // Redireccionar o manejar la respuesta del servidor
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <template class="items-center mb-5 justify-center  flex w-full"  >
      <img src="/public/JesTy.jpeg" class="size-20   rounded-full" alt="">
      </template>
      <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">Iniciar sesión</h1>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input
              v-model="email"
              type="email"
              id="email"
              class="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
              v-model="password"
              type="password"
              id="password"
              class="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
          />
        </div>
        <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-500"
        >
          Entrar
        </button>
      </form>
      <p class="text-center text-gray-600 mt-4">
        ¿No tienes una cuenta? <a href="/register" class="text-blue-600 font-medium">Regístrate</a>
      </p>
    </div>
  </div>
</template>


<style scoped>

</style>