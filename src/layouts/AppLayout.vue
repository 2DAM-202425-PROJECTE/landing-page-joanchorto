<script setup>
import IconJCT from "@/components/icons/MenuIcons/IconJCT.vue";
import IconLinkedin from "@/components/icons/RRSS/IconLinkedin.vue";
import IconInstagram from "@/components/icons/RRSS/IconInstagram.vue";
import IconGitHub from "@/components/icons/RRSS/IconGitHub.vue";

</script>

<template>
<header>
  <div class="fixed md:flex lg:flex p-2 w-full space-x-5 font-bold text-white ">
<!--    <div class="md:w-1/3 lg:w-1/3 ml-20 pt-2  flex text-gray-50 justify-start items-center">-->
<!--      <a href="/"> <img src="/public/th.jpeg" class="h-20 hover:shadow-lg hover:shadow-gray-100  bg-black bg-opacity-35 p-2 backdrop-blur-md rounded-2xl" alt=""></a>-->
<!--    </div>-->
    <div class="w-full mt-10 flex justify-center items-center px-10 text-gray-50 text-center content-center">
      <ul class="flex  rounded-full bg-opacity-30 bg-black backdrop-blur-md   py-3 px-5 space-x-5">
        <li><a class="hover:border-b-2 border-gray-50 pb-2 hover:font-normal" href="/">Home</a></li>
        <li><a class="hover:border-b-2 border-gray-50 pb-2 hover:font-normal" href="/jctagency">Empresa</a></li>
        <li><a class="hover:border-b-2 border-gray-50 pb-2 hover:font-normal" href="/blog">Blog</a></li>
        <li><a class="hover:border-b-2 border-gray-50 pb-2 hover:font-normal" href="/contact">Contacto</a></li>
      </ul>
    </div>
  </div>
</header>


    <div class="text-white "> <!-- Ajustamos el margen para el espacio del header -->
      <slot class=""/>
    </div>

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
            <li><a href="/jctagency" class="hover:text-white">Empresa</a></li>
            <li><a href="/blog" class="hover:text-white">Blog</a></li>
            <li><a href="/contact" class="hover:text-white">Contacto</a></li>
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
/* Ajustes adicionales para mejorar el diseño */
.bg-transparent {
  background-color: rgba(255, 255, 255, 0.1); /* Color semitransparente */
}

.backdrop-blur-md {
  backdrop-filter: blur(10px); /* Nivel de desenfoque */
}
</style>
