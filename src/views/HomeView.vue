<template>
  <head>
    <title>JesTy Software</title>
    <meta name="description" content="Gestiona todo tu negocio con JesTy. Automatiza, organiza y haz crecer tu empresa con nuestra solución completa.">
    <meta name="keywords" content="gestión, empresa, facturación, contabilidad, inventario, clientes">
    <meta name="author" content="JesTy Software">
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <div class="">
    <!-- Hero Section -->

    <section
        class="hero flex items-center justify-center min-h-screen ">

      <div class="space-y-10 w-full text-gray-50">
        <div class="flex lg:p-5 md:p-5 sm:p-1 flex-col ">
          <h1 class="mt-10 text-3xl md:text-5xl  lg:text-7xl  text-center font-bold mb-6">Gestiona todo tu negocio con JesTy</h1>
          <p class="md:text-xl text-lg lg:text-3xl text-center mb-8">Automatiza, organiza y haz crecer tu empresa con nuestra solución completa.</p>
          <div class="p-10 items-center justify-center md:flex-row lg:flex-row flex flex-col  text-center md:space-x-4 lg:space-x-4 md:space-y-0 lg:space-y-0 space-y-6">
            <a href="/contact" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">Solicita una Demo
            </a>
            <a href="/register" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded">Empieza Ahora
            </a>
          </div>
        </div>

        <div class="flex justify-end mb-0 pb-0 flex-col items-center content-center   ">
          <img class="w-3/4 md:w-1/3 lg:w-1/3 rounded-xl" src="/public/screenComarativa.png" alt=""/>
        </div>
      </div>
    </section>

<!--     Sección de Clientes -->
    <section data-aos="fade-up" class="py-16 bg-gray-100 w-full justify-center items-center ">
      <h2 class="text-center text-3xl font-bold mb-8">Clientes que confían en JesTy</h2>
      <div class="w-full flex pt-5 justify-around items-center">
        <img src="/public/company3.jpeg" alt="Cliente 1" class="h-16 rounded-2xl">
        <img src="/public/company1.jpeg" alt="Cliente 2" class="h-16 rounded-2xl">
        <img src="/public/company4.jpeg" alt="Cliente 3" class="h-16 rounded-2xl">
        <img src="/public/company2.jpeg" alt="Cliente 4" class="h-16 rounded-2xl">
        <img src="/public/company5.jpeg" alt="Cliente 5" class="h-16 rounded-2xl">
      </div>
    </section>

<!--    &lt;!&ndash; Sección Informativa &ndash;&gt;-->
<!--    <section data-aos="fade-left" class="py-16 px-5 bg-white">-->
<!--      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">-->
<!--        <div class="flex justify-center">-->
<!--          <img src="/public/funcionalidades2.jpg" alt="Gestión automatizada" class="rounded-lg shadow-lg">-->
<!--        </div>-->
<!--        <div class="flex flex-col justify-center">-->
<!--          <h2 class="text-3xl font-bold mb-4">Optimiza la gestión de tu negocio</h2>-->
<!--          <p class="text-lg">JesTy te ayuda a ahorrar tiempo y dinero con sus funcionalidades automatizadas. Lleva el-->
<!--            control de todas las áreas de tu empresa desde un solo lugar.</p>-->
<!--          <a class="text-gray-400 pt-6" href="/contact">Mas información</a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

    <section data-aos="fade-right" class="py-16 px-5 bg-white">
      <div class=" grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-bold mb-4">Mejora la toma de decisiones</h2>
          <p class="text-lg">Con los informes detallados de JesTy, podrás analizar el rendimiento de tu negocio y tomar decisiones estratégicas basadas en datos reales.</p>
          <a class="text-gray-400 pt-6" href="/contact">Mas información</a>

        </div>
        <div class="flex justify-center">
          <img src="/public/funcionalidades1.jpg" alt="Informes detallados" class="rounded-lg shadow-lg">
        </div>
      </div>
    </section>
    <section data-aos="fade-right" class="py-16 px-5 bg-white">
      <div class=" grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex justify-center">
          <img src="/public/funcionalidades2.jpg" alt="Informes detallados" class="rounded-lg shadow-lg">
        </div>
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-bold mb-4">Optimiza la gestión de tu negocio</h2>
          <p class="text-lg">JesTy te ayuda a ahorrar tiempo y dinero con sus funcionalidades automatizadas. Lleva el control de todas las áreas de tu empresa desde un solo lugar.</p>
          <a class="text-gray-400 pt-6" href="/contact">Mas información</a>

        </div>
      </div>
    </section>


    <!-- CTA -->
    <section data-aos="zoom-in" class="bg-gray-800 text-white py-24">
      <div class="items-center justify-center w-full flex-col flex text-center">
        <h2 class="text-4xl font-bold mb-6">Únete a miles de empresas que ya confían en JesTy</h2>
        <a href="/contact" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">Pide tu demo</a>
      </div>
    </section>
<!--    Seccion de newsletter-->
    <section data-aos="fade-up" class="bg-gray-100 px-5 py-16">
      <div class="w-full items-center justify-center flex flex-col md:flex-row ">
        <!-- Sección de texto -->
        <div class="md:w-1/2">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Suscríbete a nuestro boletín</h2>
          <p class="mb-8 text-lg text-gray-600">
            Recibe las últimas noticias y actualizaciones sobre JesTy directamente en tu bandeja de entrada.
          </p>
          <!-- Formulario -->
          <form id="newsletter-form" @submit="handleNewsletterSubmit" class="flex items-center">
            <input
                type="email"
                name="user_email"
                placeholder="Tu correo electrónico"
                class="bg-white border border-gray-300 p-2 rounded-l-lg focus:outline-none"
                required
            />
            <button
                type="submit"
                class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-lg"
            >
              Suscribirme
            </button>
          </form>
          <!-- Mensajes de confirmación o error -->
          <p v-if="isSubmitted" class="text-green-600 font-medium mt-4">
            ¡Gracias por suscribirte! 🎉
          </p>
          <p v-if="hasError" class="text-red-600 font-medium mt-4">
            Hubo un error al procesar tu suscripción. Intenta nuevamente.
          </p>
        </div>

        <!-- Imagen -->
        <div class="md:w-1/2 justify-center flex mt-8 md:mt-0">
          <img
              src="/public/th.jpeg"
              alt="Descripción de la imagen"
              class="h-52 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Funcionalidades -->
    <section data-aos="fade-up" class="py-16 px-5 bg-gray-50">
      <div class="">
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
    <section data-aos="zoom-in" class="bg-gray-200  py-16">
      <div class="w-full items-center justify-center flex flex-col text-center">
        <img src="/public/pepole1.jpg" alt="Cliente" class="rounded-full h-24  mb-4">
        <blockquote class="italic text-xl">"JesTy ha transformado la forma en que manejamos nuestro negocio. Las
          automatizaciones nos ahorran muchísimo tiempo."
        </blockquote>
        <cite class="block mt-4 font-bold">- Juan Pérez, CEO de Empresa X</cite>
      </div>
    </section>

    <!-- Características y Funcionalidades -->
    <section data-aos="fade-up" class="py-24 px-5 bg-gray-50">
      <div class="w-full flex flex-col md:flex-row items-center justify-between">
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
          <img src="/public/screenInvoiceList.png" alt="Descripción de la imagen"
               class="w-full h-auto rounded-lg shadow-lg"/>
        </div>
      </div>
      <div class="container mt-24  flex flex-col md:flex-row w-full  px-5 justify-start">

        <div class="flex flex-col justify-start items-start">
          <h2 class="text-4xl font-bold text-gray-800  mb-4">Y eso no es todo...</h2>
          <p class="mb-8 text-lg text-gray-600">Descubre más características que JesTy tiene para ti:</p>
        </div>

        <div class="justify-end items-end flex flex-col w-full">
          <ul class="list-disc list-inside space-y-4 text-left max-w-3xl ">
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
<!--      <div class="flex  items-center justify-center mt-32">-->
<!--        <img src="/public/screenShowClient.png" alt="Descripción de la imagen" class="w-3/4 rounded-xl h-auto  shadow-lg"/>-->
<!--      </div>-->
    </section>

    <!-- Preguntas Frecuentes -->
    <section data-aos="fade-up" class="bg-gray-100 items-center justify-center flex w-full py-12">
      <div class="w-full items-center justify-center">
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
      <div class="  text-center">
        <h2 class="text-4xl font-bold mb-6">Empieza a optimizar tu empresa con JesTy</h2>
        <a href="/register" class="bg-white text-blue-700 font-semibold py-3 px-6 rounded">Empieza Ahora</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import {ref} from "vue";
import emailjs from 'emailjs-com';

// Variables reactivas para manejar el estado del formulario
const isSubmitted = ref(false);
const hasError = ref(false);

// Función para manejar el envío del formulario
const handleNewsletterSubmit = async (event) => {
  event.preventDefault(); // Evitar recarga de la página

  try {
    await emailjs.sendForm(
        'service_uaggcy8', // ID del servicio de EmailJS
        'template_v183xvd', // ID de la plantilla para boletín
        event.target, // Referencia al formulario HTML
        'PrtHsOGCYBrChfJU3' // Clave pública de EmailJS
    );
    isSubmitted.value = true;
    hasError.value = false;
    event.target.reset(); // Limpia los campos del formulario
  } catch (error) {
    console.error('Error al enviar la suscripción:', error);
    isSubmitted.value = false;
    hasError.value = true;
  }
};

const openIndex = ref(-1);
const toggle = (index) => {
  if (openIndex.value === index) {
    openIndex.value = -1;
  } else {
    openIndex.value = index;
  }
};
</script>

<style scoped>
.hero{
  background-image: url('/public/hero_section4.jpg');
  background-size: cover;


}</style>
