<template>
  <div>
    <!-- Hero Section -->

    <section
        class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white h-screen flex items-center justify-center relative">
      <div class="absolute inset-0">
        <img src="/public/hero_section4.jpg" alt="JesTy Software" class="object-cover w-full h-full opacity-50">
      </div>
      <div class="relative z-10 text-center">
        <h1 class="text-5xl font-bold mb-6">Gestiona todo tu negocio con JesTy</h1>
        <p class="text-xl mb-8">Automatiza, organiza y haz crecer tu empresa con nuestra solución completa.</p>
        <div class="space-x-4">
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">Solicita una Demo
          </button>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded">Empieza Ahora
          </button>
        </div>
        <NewsletterPopip v-if="showPopup" />

      </div>
    </section>

    <!-- Sección de Clientes -->
    <section data-aos="fade-up" class="py-16 bg-gray-100">
      <h2 class="text-center text-3xl font-bold mb-8">Clientes que confían en JesTy</h2>
      <div class="container mx-auto flex pt-5 justify-around items-center">
        <img src="/public/company3.jpeg" alt="Cliente 1" class="h-16 rounded-2xl">
        <img src="/public/company1.jpeg" alt="Cliente 2" class="h-16 rounded-2xl">
        <img src="/public/company4.jpeg" alt="Cliente 3" class="h-16 rounded-2xl">
        <img src="/public/company2.jpeg" alt="Cliente 4" class="h-16 rounded-2xl">
        <img src="/public/company5.jpeg" alt="Cliente 5" class="h-16 rounded-2xl">
      </div>
    </section>

    <!-- Sección Informativa -->
    <section data-aos="fade-left" class="py-16 bg-white">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex justify-center">
          <img src="/public/funcionalidades2.jpg" alt="Gestión automatizada" class="rounded-lg shadow-lg">
        </div>
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-bold mb-4">Optimiza la gestión de tu negocio</h2>
          <p class="text-lg">JesTy te ayuda a ahorrar tiempo y dinero con sus funcionalidades automatizadas. Lleva el
            control de todas las áreas de tu empresa desde un solo lugar.</p>
        </div>
      </div>
    </section>

    <section data-aos="fade-right" class="py-16 bg-white">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-bold mb-4">Mejora la toma de decisiones</h2>
          <p class="text-lg">Con los informes detallados de JesTy, podrás analizar el rendimiento de tu negocio y tomar decisiones estratégicas basadas en datos reales.</p>
        </div>
        <div class="flex justify-center">
          <img src="/public/funcionalidades1.jpg" alt="Informes detallados" class="rounded-lg shadow-lg">
        </div>
      </div>
    </section>


    <!-- CTA -->
    <section data-aos="zoom-in" class="bg-gray-800 text-white py-24">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Únete a miles de empresas que ya confían en JesTy</h2>
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">Pide tu demo</button>
      </div>
    </section>

    <!-- Funcionalidades -->
    <section data-aos="fade-up" class="py-16 bg-gray-50">
      <div class="container mx-auto">
        <h2 class="text-center text-3xl font-bold mb-20">Principales funcionalidades</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="flex flex-col items-center text-center">
            <img src="/public/BillingSVG.svg" alt="Funcionalidad 1" class="h-16 mb-4">
            <h3 class="font-bold text-xl">Facturación</h3>
            <p>Automatiza la creación y gestión de facturas fácilmente.</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/public/AccountingSVG.svg" alt="Funcionalidad 2" class="h-16 mb-4">
            <h3 class="font-bold text-xl">Contabilidad</h3>
            <p>Lleva un control detallado de la contabilidad de tu empresa.</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/public/InventorySVG.svg" alt="Funcionalidad 3" class="h-16 mb-4">
            <h3 class="font-bold text-xl">Inventario</h3>
            <p>Controla tus productos y suministros en tiempo real.</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/public/UserSVG.svg" alt="Funcionalidad 4" class="h-16 mb-4">
            <h3 class="font-bold text-xl">Clientes</h3>
            <p>Gestiona toda la información de tus clientes desde un solo lugar.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonios -->
    <section data-aos="zoom-in" class="bg-gray-200 py-16">
      <div class="container mx-auto text-center">
        <img src="/public/pepole1.jpg" alt="Cliente" class="rounded-full h-24 mx-auto mb-4">
        <blockquote class="italic text-xl">"JesTy ha transformado la forma en que manejamos nuestro negocio. Las
          automatizaciones nos ahorran muchísimo tiempo."
        </blockquote>
        <cite class="block mt-4 font-bold">- Juan Pérez, CEO de Empresa X</cite>
      </div>
    </section>

    <!-- Características y Funcionalidades -->
    <section data-aos="fade-up" class="py-24 bg-gray-50">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Características y Funcionalidades de JesTy</h2>
          <p class="mb-8 text-lg text-gray-600">Descubre cómo JesTy puede facilitar tu trabajo y aumentar tu
            productividad.</p>

          <ul class="list-disc list-inside space-y-4 text-left">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg text-gray-800">Organización de facturas y gastos en un solo lugar.</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg text-gray-800">Conciliación bancaria segura y eficiente.</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg text-gray-800">Presentación automática de modelos de IVA e IRPF.</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg text-gray-800">Más de 40 plantillas editables para personalizar documentos.</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg text-gray-800">Generación automatizada de remesas en formato XML.</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg text-gray-800">Programación de facturas recurrentes fácilmente.</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg text-gray-800">Conexión sencilla con tu asesoría para obtener soporte.</span>
            </li>
          </ul>
        </div>

        <div class="md:w-1/2 mt-8 md:mt-0">
          <img src="/public/pepole3.jpg" alt="Descripción de la imagen"
               class="w-full h-auto rounded-lg shadow-lg"/>
        </div>
      </div>
      <div class="container mt-24 mx-auto flex flex-col md:flex-row w-full  justify-start">

        <div class="flex flex-col justify-start items-start">
          <h2 class="text-4xl font-bold text-gray-800  mb-4">Y eso no es todo...</h2>
          <p class="mb-8 text-lg text-gray-600">Descubre más características que JesTy tiene para ti:</p>
        </div>

        <div class="justify-end items-end flex flex-col w-full">
          <ul class="list-disc list-inside space-y-4 text-left max-w-3xl mx-auto">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg text-gray-800">Soporte de múltiples divisas en facturas.</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg text-gray-800">Envío y gestión de presupuestos de forma eficiente.</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg text-gray-800">Cálculo automático de impuestos en tus facturas.</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg text-gray-800">Integraciones fáciles con otras aplicaciones.</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg text-gray-800">Gestión completa de nóminas y salarios.</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg text-gray-800">Acceso desde cualquier dispositivo y lugar.</span>
            </li>
          </ul>
        </div>


      </div>
      <div class="flex  items-center justify-center mt-32">
        <img src="/public/screenshot4.png" alt="Descripción de la imagen" class="w-3/4 rounded-xl h-auto  shadow-lg"/>
      </div>
    </section>

    <!-- Preguntas Frecuentes -->
    <section data-aos="fade-up" class="bg-gray-100 py-12">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-6">Preguntas Frecuentes</h2>
        <div class="space-y-4">
          <div class="bg-white shadow-md rounded-lg">
            <button @click="toggle(0)"
                    class="w-full text-left px-4 py-3 focus:outline-none flex justify-between items-center">
              <span class="font-semibold">¿Cómo puedo crear una cuenta?</span>
              <span v-if="openIndex === 0">-</span>
              <span v-else>+</span>
            </button>
            <div v-if="openIndex === 0" class="px-4 pb-3">
              <p>Puedes crear una cuenta haciendo clic en el botón "Registrar" en la esquina superior derecha y
                siguiendo las instrucciones.</p>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg">
            <button @click="toggle(1)"
                    class="w-full text-left px-4 py-3 focus:outline-none flex justify-between items-center">
              <span class="font-semibold">¿Cuáles son los métodos de pago aceptados?</span>
              <span v-if="openIndex === 1">-</span>
              <span v-else>+</span>
            </button>
            <div v-if="openIndex === 1" class="px-4 pb-3">
              <p>Aceptamos pagos con tarjetas de crédito, débito y PayPal.</p>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg">
            <button @click="toggle(2)"
                    class="w-full text-left px-4 py-3 focus:outline-none flex justify-between items-center">
              <span class="font-semibold">¿Puedo cancelar mi suscripción en cualquier momento?</span>
              <span v-if="openIndex === 2">-</span>
              <span v-else>+</span>
            </button>
            <div v-if="openIndex === 2" class="px-4 pb-3">
              <p>Sí, puedes cancelar tu suscripción en cualquier momento desde tu configuración de cuenta.</p>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg">
            <button @click="toggle(3)"
                    class="w-full text-left px-4 py-3 focus:outline-none flex justify-between items-center">
              <span class="font-semibold">¿Ofrecen soporte técnico?</span>
              <span v-if="openIndex === 3">-</span>
              <span v-else>+</span>
            </button>
            <div v-if="openIndex === 3" class="px-4 pb-3">
              <p>Sí, ofrecemos soporte técnico a través de correo electrónico y chat en vivo.</p>
            </div>
          </div>

          <!-- Puedes agregar más preguntas aquí -->
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section data-aos="zoom-in" class="bg-blue-700 text-white py-32">
      <div class=" mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Empieza a optimizar tu empresa con JesTy</h2>
        <button class="bg-white text-blue-700 font-semibold py-3 px-6 rounded">Empieza Ahora</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import NewsletterPopip from "@/components/NewsletterPopip.vue";

const openIndex = ref(null);
const showPopup = ref(true);


function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}</script>

<style scoped>
/* Puedes agregar tus estilos personalizados aquí */
</style>
