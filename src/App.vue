<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import 'aos/dist/aos.css';
import AOS from 'aos'
import CookieConsent from "@/views/legalitats/CookieConsent.vue";



</script>


<template>
  <AppLayout>
    <RouterView/>
    <CookieConsent/>
  </AppLayout>
</template>


<style scoped>
</style>
