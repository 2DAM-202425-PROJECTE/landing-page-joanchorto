<template>
  <div class="min-h-screen flex flex-col">
    <!-- Barra superior fija -->
    <nav class="bg-gray-900 text-white w-full fixed top-0 z-10 shadow-lg">

      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <img class="h-12 rounded-2xl w-auto" src="/public/JesTy.jpeg" alt="App Logo"/>
              <span class="ml-3 font-bold text-xl">JesTy</span>
            </a>
          </div>

          <!-- Enlaces de navegación -->
          <div class="hidden md:flex items-center space-x-8">
            <!-- Dropdown Funcionalidades -->
            <div class="relative group">
              <button class="inline-flex items-center text-sm font-medium focus:outline-none">
                Funcionalidades
                <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <!-- Dropdown -->
              <div
                  class="absolute z-10 hidden group-hover:block bg-gray-900 rounded-md text-gray-200 border border-gray-50 shadow-md w-96 p-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <a href="/software-facturacion-online"
                       class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900 rounded-md">
                      <div class="flex h-5 items-center">
                        <!-- Icon for Facturación -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M8 4h13v16H8z"></path>
                          <path d="M3 4h2v16H3z"></path>
                        </svg>
                        <p class="ml-2">Facturación</p>
                      </div>
                      <p class="text-xs text-gray-400 mt-1">Gestiona tus facturas aquí</p>
                    </a>
                  </div>

                  <div>
                    <a href="/software-contabilidad-online"
                       class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900 rounded-md">
                      <div class="flex h-5 items-center">
                        <!-- Icon for Contabilidad -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12h6m-3-3v6m4 0H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2z"/>
                        </svg>
                        <p class="ml-2">Contabilidad</p>
                      </div>
                      <p class="text-xs text-gray-400 mt-1">Controla tu contabilidad general</p>
                    </a>
                  </div>

                  <div>
                    <a href="/software-inventory-online"
                       class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900 rounded-md">
                      <div class="flex h-5 items-center">
                        <!-- Icon for Inventario -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 7h18M9 12h6m-6 4h6M5 5v14h14V5H5z"/>
                        </svg>
                        <p class="ml-2">Inventario</p>
                      </div>
                      <p class="text-xs text-gray-400 mt-1">Administra tu inventario completo</p>
                    </a>
                  </div>

                  <div>
                    <a href="/software-clientes-online"
                       class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900 rounded-md">
                      <div class="flex h-5 items-center">
                        <!-- Icon for Clientes -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 20h5v-1a3 3 0 00-3-3h-4a3 3 0 00-3 3v1h5M8 20h5v-1a3 3 0 00-3-3H6a3 3 0 00-3 3v1h5m8-10a4 4 0 11-8 0 4 4 0 018 0zM16 7v2m4 0v2m-4 0v2m4 0v2"/>
                        </svg>
                        <p class="ml-2">Clientes</p>
                      </div>
                      <p class="text-xs text-gray-400 mt-1">Gestiona datos de clientes</p>
                    </a>
                  </div>

                  <div>
                    <a href="/software-crm-online"
                       class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900 rounded-md">
                      <div class="flex h-5 items-center">
                        <!-- Icon for CRM -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                              d="M20 13V9a2 2 0 00-2-2h-4V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2h6a2 2 0 002-2v-4h4a2 2 0 002-2zM10 12h4m-4 4h4"/>
                        </svg>
                        <p class="ml-2">CRM</p>
                      </div>
                      <p class="text-xs text-gray-400 mt-1">Administra relaciones con clientes</p>
                    </a>
                  </div>

                  <div>
                    <a href="/software-pos-online"
                       class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900 rounded-md">
                      <div class="flex h-5 items-center">
                        <!-- Icon for TPV -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                              d="M6 18h12M6 9h12M9 22v-4M15 22v-4m-7-7h10a2 2 0 012 2v9H5v-9a2 2 0 012-2zM9 2h6v5H9z"/>
                        </svg>
                        <p class="ml-2">TPV</p>
                      </div>
                      <p class="text-xs text-gray-400 mt-1">Gestión de ventas y pagos</p>
                    </a>
                  </div>
                </div>
              </div>

            </div>
            <!-- Dropdown Sobre Nosotros -->
            <div class="relative group">
              <button class="inline-flex items-center text-sm font-medium focus:outline-none">
                Sobre Nosotros
                <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <!-- Dropdown -->
              <div
                  class="absolute z-10 hidden group-hover:block bg-gray-900 rounded-md text-gray-200 border border-gray-50 shadow-md w-96 p-4">
                <div class="grid grid-cols-2 gap-4">
                  <!-- Primera columna: Nuestra Empresa -->
                  <a href="/jctagency" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900 rounded-md">
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                      <p class="ml-2">Nuestra Empresa</p>
                    </div>
                    <p class="mt-1 text-xs text-gray-400">Información sobre la compañía.</p>
                  </a>

                  <!-- Segunda columna: ¿Quiénes Somos? -->
                  <a href="/jctagency" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900 rounded-md">
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 20h9M12 4h9m-9 8h9"/>
                      </svg>
                      <p class="ml-2">¿Quiénes Somos?</p>
                    </div>
                    <p class="mt-1 text-xs text-gray-400">Conoce más sobre nosotros.</p>
                  </a>
                </div>
              </div>

            </div>

            <!-- Dropdown Precios -->
            <div class="relative group">
              <button class="inline-flex items-center text-sm font-medium focus:outline-none">
                Precios
                <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <!-- Dropdown -->
              <div
                  class="absolute z-10 hidden group-hover:block bg-gray-900 rounded-md text-gray-200 border border-gray-50 shadow-md w-96 p-4">
                <div class="grid grid-cols-2 gap-4">
                  <!-- Columna 1: Versión Online -->
                  <a href="/online-jesty-price"
                     class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900 rounded-md">
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 15h6M9 19H3M4 10h16M17 14h6M6 14H4M9 5H5"/>
                      </svg>
                      <p class="ml-2">Versión Online</p>
                    </div>
                    <p class="mt-1 text-xs text-gray-400">Ideal para uso en línea.</p>
                  </a>

                  <!-- Columna 2: Versión para Servidor -->
                  <a href="/physical-jesty-price"
                     class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900 rounded-md">
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M9 16h6"/>
                      </svg>
                      <p class="ml-2">Versión para Servidor</p>
                    </div>
                    <p class="mt-1 text-xs text-gray-400">Perfecto para servidores locales.</p>
                  </a>
                </div>
              </div>

            </div>
            <!--            contacto-->
            <div class="relative group">
              <a href="/contact" class="inline-flex items-center text-sm font-medium focus:outline-none">
                Contacto
              </a>
            </div>
          </div>






        <!-- Sección derecha: Menú de usuario -->
        <div class="md:visible sm:visible lg:visible hidden lg:flex md:flex space-x-4 items-center">
          <a href="#" class="text-sm px-3 py-2 rounded-md text-gray-200 hover:bg-blue-600 transition-all duration-200">Iniciar
            Sesión</a>
          <a href="#"
             class="text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200">Registrarse</a>
        </div>
          <!-- Botón de menú para dispositivos pequeños -->

          <div class="md:hidden lg:hidden sm:hidden visible">
            <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                    class="text-gray-300 hover:text-white focus:outline-none focus:text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
      </div>

      </div>



      <!-- Menú desplegable en móviles -->
      <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-800 text-white">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <a href="/software-facturacion-online" class="block px-4 py-2 hover:bg-gray-700 rounded-md">Facturación</a>
          <a href="/software-contabilidad-online" class="block px-4 py-2 hover:bg-gray-700 rounded-md">Contabilidad</a>
          <a href="/software-inventory-online" class="block px-4 py-2 hover:bg-gray-700 rounded-md">Inventario</a>
          <a href="/software-clientes-online" class="block px-4 py-2 hover:bg-gray-700 rounded-md">Clientes</a>
          <a href="/software-crm-online" class="block px-4 py-2 hover:bg-gray-700 rounded-md">CRM</a>
          <a href="/software-pos-online" class="block px-4 py-2 hover:bg-gray-700 rounded-md">TPV</a>
        </div>
      </div>
    </nav>

    <!-- Contenido principal -->
    <main class="flex-grow mt-16">
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-4">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <span>© 2023 JesTy. Todos los derechos reservados.</span>
        <nav class="hidden md:flex space-x-4">
          <a href="/politica-de-privacidad" class="hover:text-white">Política de Privacidad</a>
          <a href="/terminos-y-condiciones" class="hover:text-white">Términos y Condiciones</a>
          <a href="/contacto" class="hover:text-white">Contacto</a>
        </nav>
      </div>
      <!-- Footer para móviles -->
      <div v-if="!isMobileMenuOpen" class="md:hidden text-center pt-4 space-y-2">
        <a href="/politica-de-privacidad" class="block hover:text-white">Política de Privacidad</a>
        <a href="/terminos-y-condiciones" class="block hover:text-white">Términos y Condiciones</a>
        <a href="/contacto" class="block hover:text-white">Contacto</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
};
</script>

<style scoped>
/* Aquí puedes añadir estilos personalizados si es necesario */
</style>
