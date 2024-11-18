<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

// Variables reactivas
const isFormSubmitted = ref(false);
const submittedError = ref(false);
const formFields = ref({
  nombre: '',
  email: '',
  mensaje: ''
});

// Función para limpiar los campos del formulario
const clearFormFields = () => {
  formFields.value = {
    nombre: '',
    email: '',
    mensaje: ''
  };
};

// Función para manejar el envío del formulario
const handleSubmit = async (event) => {
  try {
    await emailjs.sendForm(
        'service_uaggcy8', // ID del servicio de EmailJS
        'template_88m2twe', // ID de la plantilla de EmailJS
        event.target, // Referencia al formulario (event.target)
        'PrtHsOGCYBrChfJU3' // Clave pública de EmailJS
    );
    isFormSubmitted.value = true;
    submittedError.value = false;
    clearFormFields();
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    isFormSubmitted.value = false;
    submittedError.value = true;
  }
};
</script>

<template>
  <div class="flex flex-col items-center bg-gray-100 py-20 px-6">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-gray-900">Contacto</h2>
      <p class="text-lg text-gray-600 mt-2">
        Completa el formulario para ponerte en contacto con nosotros.
      </p>
    </div>
    <!-- Formulario con ID para EmailJS -->
    <form
        id="contact-form"
        @submit.prevent="handleSubmit"
        class="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-6"
    >
      <div>
        <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
        <input
            type="text"
            id="nombre"
            v-model="formFields.nombre"
            name="nombre"
            class="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Escribe tu nombre"
            required
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
        <input
            type="email"
            id="email"
            v-model="formFields.email"
            name="email"
            class="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Escribe tu correo"
            required
        />
      </div>
      <div>
        <label for="mensaje" class="block text-sm font-medium text-gray-700">Mensaje</label>
        <textarea
            id="mensaje"
            v-model="formFields.mensaje"
            name="mensaje"
            rows="4"
            class="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Escribe tu mensaje"
            required
        ></textarea>
      </div>
      <div>
        <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-500"
        >
          Enviar
        </button>
      </div>
      <p v-if="isFormSubmitted" class="text-center text-green-600 font-medium">
        ¡Formulario enviado con éxito!
      </p>
      <p v-if="submittedError" class="text-center text-red-600 font-medium">
        Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.
      </p>
    </form>
  </div>
</template>
