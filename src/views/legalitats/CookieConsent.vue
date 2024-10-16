<template>
  <div v-if="!isCookieAccepted" class="fixed flex items-center space-x-5  bottom-0 w-full bg-gray-800 text-white p-4">
    <p class="justify-start w-1/3">Utilizamos cookies para mejorar la experiencia. ¿Aceptas el uso de cookies?</p>
    <div class="justify-center w-1/3 flex space-x-5 mx-5 my-5">
      <button @click="acceptCookies" class="bg-green-500 px-4 py-2 rounded">Aceptar</button>
      <button @click="rejectCookies" class="bg-red-500 px-4 py-2 rounded">Rechazar</button>
    </div>
    <a class="text-gray-400 w-1/3 justify-end hover:text-gray-50 text-sm" href="/politica-de-cookies">Ver la politica de cookies</a>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Cookies from 'js-cookie';

const isCookieAccepted = ref(false);

onMounted(() => {
  const cookieConsent = Cookies.get('cookie_consent');
  if (cookieConsent) {
    isCookieAccepted.value = true;
  }
});

const acceptCookies = () => {
  Cookies.set('cookie_consent', 'accepted', { expires: 365 });
  isCookieAccepted.value = true;
};

const rejectCookies = () => {
  Cookies.set('cookie_consent', 'rejected', { expires: 365 });
  isCookieAccepted.value = false;
};
</script>

<style scoped>
/* Estilos opcionales */
</style>
