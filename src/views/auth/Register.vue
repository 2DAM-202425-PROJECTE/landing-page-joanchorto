<script setup>
import { ref } from 'vue';

const company = ref({
  name: '',
  email: '',
  phone: '',
  address: ''
});

const adminUser = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

// Lógica para el envío del formulario de registro
const handleRegister = async () => {
  try {
    if (adminUser.value.password !== adminUser.value.confirmPassword) {
      throw new Error('Las contraseñas no coinciden');
    }

    // Aquí puedes agregar la lógica para enviar el registro al servidor
    console.log('Registrando empresa:', company.value);
    console.log('Registrando administrador:', adminUser.value);

    // Redireccionar o manejar la respuesta del servidor
  } catch (error) {
    console.error('Error al registrarse:', error);
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">Registro</h1>
      <form @submit.prevent="handleRegister" class="space-y-6">
        <!-- Información de la empresa -->
        <div>
          <h2 class="text-lg font-bold text-gray-700 mb-2">Información de la Empresa</h2>
          <div class="space-y-4">
            <div>
              <label for="company-name" class="block text-sm font-medium text-gray-700">Nombre de la Empresa</label>
              <input
                  v-model="company.name"
                  type="text"
                  id="company-name"
                  class="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
              />
            </div>
            <div>
              <label for="company-email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input
                  v-model="company.email"
                  type="email"
                  id="company-email"
                  class="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
              />
            </div>
            <div>
              <label for="company-phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
              <input
                  v-model="company.phone"
                  type="text"
                  id="company-phone"
                  class="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
              />
            </div>
            <div>
              <label for="company-address" class="block text-sm font-medium text-gray-700">Dirección</label>
              <input
                  v-model="company.address"
                  type="text"
                  id="company-address"
                  class="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
              />
            </div>
          </div>
        </div>

        <!-- Información del Administrador -->
        <div>
          <h2 class="text-lg font-bold text-gray-700 mb-2">Información del Administrador</h2>
          <div class="space-y-4">
            <div>
              <label for="admin-name" class="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                  v-model="adminUser.name"
                  type="text"
                  id="admin-name"
                  class="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
              />
            </div>
            <div>
              <label for="admin-email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input
                  v-model="adminUser.email"
                  type="email"
                  id="admin-email"
                  class="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
              />
            </div>
            <div>
              <label for="admin-password" class="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                  v-model="adminUser.password"
                  type="password"
                  id="admin-password"
                  class="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
              />
            </div>
            <div>
              <label for="admin-confirm-password" class="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
              <input
                  v-model="adminUser.confirmPassword"
                  type="password"
                  id="admin-confirm-password"
                  class="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
              />
            </div>
          </div>
        </div>

        <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-500"
        >
          Registrarme
        </button>
      </form>
      <p class="text-center text-gray-600 mt-4">
        ¿Ya tienes una cuenta? <a href="/login" class="text-blue-600 font-medium">Inicia sesión</a>
      </p>
    </div>
  </div>
</template>
