<template>
  <div class="min-h-screen flex flex-col">
    <!-- Barra superior fija -->
    <nav class="bg-gray-900 text-white w-full fixed top-0 z-10 shadow-lg">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Sección izquierda: Logo -->
          <div class="flex items-center">
            <a href="/" class="flex items-center">
            <img class="h-12 rounded-2xl w-auto" src="/public/JesTy.jpeg" alt="App Logo" />
            <span class="ml-3 font-bold text-xl">JesTy</span>
            </a>
          </div>

          <!-- Sección central: Enlaces de navegación -->
          <div class="hidden md:flex items-center space-x-8">

            <div class="relative group">
              <button class="inline-flex items-center text-sm font-medium focus:outline-none">
                Funcionalidades
                <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <!-- Dropdown -->
              <div class="absolute  z-10 hidden group-hover:block bg-gray-900 rounded-md text-gray-200 border border-gray-50 shadow-md w-96">
                <a href="/software-facturacion-online" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">
                  <div class="flex h-5">
                    <!-- Icon for Facturación -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M8 4h13v16H8z"></path>
                      <path d="M3 4h2v16H3z"></path>
                    </svg>
                    <p class="ml-2">Facturación</p>
                  </div>
                </a>
                <a href="/software-contabilidad-online" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">
                  <div class="flex h-5">
                    <!-- Icon for Contabilidad -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-3-3v6m4 0H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2z" />
                    </svg>
                    <p class="ml-2">Contabilidad</p>
                  </div>
                </a>
                <a href="/software-inventory-online" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">
                  <div class="flex h-5">
                    <!-- Icon for Inventario -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M9 12h6m-6 4h6M5 5v14h14V5H5z" />
                    </svg>
                    <p class="ml-2">Inventario</p>
                  </div>
                </a>
                <a href="/software-clientes-online" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">
                  <div class="flex h-5">
                    <!-- Icon for Clientes -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-1a3 3 0 00-3-3h-4a3 3 0 00-3 3v1h5M8 20h5v-1a3 3 0 00-3-3H6a3 3 0 00-3 3v1h5m8-10a4 4 0 11-8 0 4 4 0 018 0zM16 7v2m4 0v2m-4 0v2m4 0v2" />
                    </svg>
                    <p class="ml-2">Clientes</p>
                  </div>
                </a>
                <!-- CRM Section -->
                <a href="/software-crm-online" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">
                  <div class="flex h-5">
                    <!-- Icon for CRM -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 13V9a2 2 0 00-2-2h-4V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2h6a2 2 0 002-2v-4h4a2 2 0 002-2zM10 12h4m-4 4h4" />
                    </svg>
                    <p class="ml-2">CRM</p>
                  </div>
                </a>
                <!-- TPV Section -->
                <a href="/software-pos-online" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">
                  <div class="flex h-5">
                    <!-- Icon for TPV -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M6 18h12M6 9h12M9 22v-4M15 22v-4m-7-7h10a2 2 0 012 2v9H5v-9a2 2 0 012-2zM9 2h6v5H9z" />
                    </svg>
                    <p class="ml-2">TPV</p>
                  </div>
                </a>
              </div>

            </div>
            <!-- Dropdown Sobre Nosotros -->
            <div class="relative group">
              <button class="inline-flex items-center text-sm font-medium focus:outline-none">
                Sobre Nosotros
                <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <!-- Dropdown -->
              <div class="absolute  z-10 hidden group-hover:block bg-gray-900 rounded-md text-gray-200 border border-gray-50 shadow-md w-96">
                <a href="/jctagency" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">
                  <div class="flex h-5">
                    <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <p class="ml-2">Nuestra Empresa</p>
                  </div>
                </a>
                <a href="/jctagency" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">
                  <div class="flex h-5">
                    <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20h9M12 4h9m-9 8h9" />
                    </svg>
                    <p class="ml-2">¿Quiénes Somos?</p>
                  </div>
                </a>
              </div>
            </div>

            <!-- Dropdown Precios -->
            <div class="relative group">
              <button class="inline-flex items-center text-sm font-medium focus:outline-none">
                Precios
                <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <!-- Dropdown -->
              <div class="absolute  z-10 hidden group-hover:block bg-gray-900 rounded-md text-gray-200 border border-gray-50 shadow-md w-96">
                <a href="/online-jesty-price" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">
                  <div class="flex h-5">
                    <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15h6M9 19H3M4 10h16M17 14h6M6 14H4M9 5H5" />
                    </svg>
                    <p class="ml-2">Versión Online</p>
                  </div>
                </a>
                <a href="/physical-jesty-price" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">
                  <div class="flex h-5">
                    <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M9 16h6" />
                    </svg>
                    <p class="ml-2">Versión para Servidor</p>
                  </div>
                </a>
              </div>
            </div>
<!--            contacto-->
            <div class="relative group">
              <a href="/contact" class="inline-flex items-center text-sm font-medium focus:outline-none">
                Contacto
              </a>
            </div>


<!--            &lt;!&ndash; Dropdown Promociones &ndash;&gt;-->
<!--            <div class="relative group">-->
<!--              <button class="inline-flex items-center text-sm font-medium focus:outline-none">-->
<!--                Promociones-->
<!--                <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />-->
<!--                </svg>-->
<!--              </button>-->
<!--              &lt;!&ndash; Dropdown &ndash;&gt;-->
<!--              <div class="absolute hidden group-hover:block bg-gray-900 rounded-md text-gray-200 border border-gray-50 shadow-md w-96">-->
<!--                <a href="#" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">-->
<!--                  <div class="flex h-5">-->
<!--                    <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 2v6a2 2 0 001 1.732V15a2 2 0 002 2h1a2 2 0 002-2V9.732A2 2 0 0022 8V2" />-->
<!--                    </svg>-->
<!--                    <p class="ml-2">Descuento Especial</p>-->
<!--                  </div>-->
<!--                </a>-->
<!--                <a href="#" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">-->
<!--                  <div class="flex h-5">-->
<!--                    <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h12M8 14h8" />-->
<!--                    </svg>-->
<!--                    <p class="ml-2">Paquetes Familiares</p>-->
<!--                  </div>-->
<!--                </a>-->
<!--              </div>-->
<!--            </div>-->

<!--            &lt;!&ndash; Dropdown Recursos &ndash;&gt;-->
<!--            <div class="relative group">-->
<!--              <button class="inline-flex items-center text-sm font-medium focus:outline-none">-->
<!--                Recursos-->
<!--                <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />-->
<!--                </svg>-->
<!--              </button>-->
<!--              &lt;!&ndash; Dropdown &ndash;&gt;-->
<!--              <div class="absolute hidden group-hover:block bg-gray-900 rounded-md text-gray-200 border border-gray-50 shadow-md w-96">-->
<!--                <a href="#" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">-->
<!--                  <div class="flex h-5">-->
<!--                    <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20l9-8-9-8v16z" />-->
<!--                    </svg>-->
<!--                    <p class="ml-2">Blog</p>-->
<!--                  </div>-->
<!--                </a>-->
<!--                <a href="#" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">-->
<!--                  <div class="flex h-5">-->
<!--                    <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L2 12l10 10 10-10L12 2z" />-->
<!--                    </svg>-->
<!--                    <p class="ml-2">Academia</p>-->
<!--                  </div>-->
<!--                </a>-->
<!--                <a href="#" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900">-->
<!--                  <div class="flex h-5">-->
<!--                    <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4M4 20h16V4H4v16z" />-->
<!--                    </svg>-->
<!--                    <p class="ml-2">WebBinaries</p>-->
<!--                  </div>-->
<!--                </a>-->
<!--              </div>-->
<!--            </div>-->
          </div>
          <!-- Sección derecha: Menú de usuario -->
          <div class="flex space-x-4 items-center">
            <a href="#" class="text-sm px-3 py-2 rounded-md text-gray-200 hover:bg-blue-600 transition-all duration-200">Iniciar Sesión</a>
            <a href="#" class="text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200">Registrarse</a>
          </div>
        </div>
      </div>
    </nav>



    <!-- Contenido Principal -->
    <main class="flex-grow pt-10">
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto text-center lg:px-8">
        <div class="flex justify-center space-x-8">
          <a href="#" class="text-gray-400 hover:text-white transition-all duration-200">
            <IconInstagram />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-all duration-200">
            <IconLinkedin />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-all duration-200">
            <IconX />
          </a>
        </div>
        <div class="mt-4 space-x-4">
          <a href="/politica-de-privacidad" class="text-gray-400 hover:text-white transition-all duration-200">Política de Privacidad</a>
          <a href="/politica-de-cookies" class="text-gray-400 hover:text-white transition-all duration-200">Política de Cookies</a>
          <a href="/aviso-legal" class="text-gray-400 hover:text-white transition-all duration-200">Aviso Legal</a>
        </div>
        <p class="mt-4 text-sm text-gray-400">© 2024 JesTy. Todos los derechos reservados.</p>
      </div>
    </footer>

  </div>
</template>

<script setup>
// Importación de iconos, asegúrate de que estos componentes estén disponibles
import IconEcosystem from '@/components/icons/IconEcosystem.vue'
import IconInstagram from '@/components/icons/RRSS/IconInstagram.vue'
import IconLinkedin from '@/components/icons/RRSS/IconLinkedin.vue'
import IconX from '@/components/icons/RRSS/IconX.vue'

</script>

<style scoped>
/* Añadir estilos adicionales si es necesario */
</style>
