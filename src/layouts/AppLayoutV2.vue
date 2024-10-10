<script setup>

import IconLinkedin from "@/components/icons/RRSS/IconLinkedin.vue";
import IconInstagram from "@/components/icons/RRSS/IconInstagram.vue";
</script>

<template>
  <header class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold text-blue-600">
        <img src="/public/th.jpeg" class="w-14 h-14 rounded-xl shadow-2xl shadow-gray-50 " alt="">
      </a>
        <ul class="hidden md:flex space-x-6">
        <li><a href="#features" class="text-gray-600 hover:text-blue-600 transition duration-300">Funciones</a></li>
        <li><a href="#pricing" class="text-gray-600 hover:text-blue-600 transition duration-300">Precios</a></li>
        <li><a href="#analisis-digital-gratuito" class="text-gray-600 hover:text-blue-600 transition duration-300">Análisis</a></li>
        <li><a href="#empresa" class="text-gray-600 hover:text-blue-600 transition duration-300">Empresa</a></li>
        <li><a href="#contact" class="text-gray-600 hover:text-blue-600 transition duration-300">Contacto</a></li>
      </ul>
      <button  class="md:hidden text-gray-600 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </nav>
  </header>
  <main>
    <slot/>
  </main>

  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Logo y descripción -->
        <div>
          <h2 class="text-lg font-bold text-white mb-4">JCT Agency</h2>
          <p class="text-sm">
            Nuestro objetivo es ayudarte a mejorar tu empresa con las mejores herramientas.
          </p>
        </div>

        <!-- Enlaces de navegación -->
        <div class="justify-start items-center flex flex-col">
          <h3 class="text-lg font-semibold text-white mb-4">Enlaces</h3>
          <ul class="space-y-2">
            <li><a href="/" class="hover:text-white">Inicio</a></li>
            <li><a href="#empresa" class="hover:text-white">Empresa</a></li>
            <li><a href="/blog" class="hover:text-white">Blog</a></li>
            <li><a href="#contact" class="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        <!-- Redes sociales -->
        <div class="justify-start items-center flex flex-col">
          <h3 class="text-lg font-semibold text-white mb-4">Síguenos</h3>
          <div class="flex space-x-4">
            <a href="/" class="text-gray-400 hover:text-white">
              <IconInstagram />
            </a>
            <a href="/" class="text-gray-400 hover:text-white">
              <IconLinkedin />
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 border-t border-gray-700 pt-8 text-center">
        <p class="text-sm">&copy; 2024 JCT Agency Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>