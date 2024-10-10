<template>

<!--  Hero section-->
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Fondo del Sistema ERP"
          class="object-cover w-full h-full transform scale-105 transition-transform duration-1000 ease-in-out hover:scale-110">
      <div class="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
    </div>
    <div class="relative z-10 space-y-10 text-center px-4 sm:px-8 lg:px-16">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-down"
          aria-label="ERP JCT">
        Sistema ERP JCT
      </h1>
      <h2 class="text-3xl font-semibold text-white">
        Revolucionando las Operaciones Empresariales
      </h2>
      <p class="text-xl sm:text-2xl text-blue-100 mb-8 animate-fade-in-up"
         aria-label="Optimiza procesos, aumenta la eficiencia y fomenta el crecimiento con nuestra solución ERP de vanguardia">
        Optimiza procesos, aumenta la eficiencia y fomenta el crecimiento con nuestra solución ERP de vanguardia
      </p>
      <a href="#contact"
         class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
         aria-label="Explorar Ahora">
        Contacta Ahora
      </a>
    </div>
    <div class="absolute bottom-0 left-0 right-0 p-4 text-center text-blue-100 text-sm">
      <p>Desplázate hacia abajo para saber más</p>
      <svg class="w-6 h-6 mx-auto mt-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>

<!-- Modules section-->
  <section id="features" data-aos="zoom-in" class="border-b-2 mx-24  p-10">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-6 text-center">Módulos ERP</h1>

      <div class="mb-8">
        <p class="text-xl text-center">Explora nuestros potentes módulos ERP que optimizan la contabilidad, facturación y gestión de relaciones con clientes. Mejora tus operaciones con nuestras soluciones integrales y fáciles de usar.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Contabilidad -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 text-blue-600" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
          <h3 class="text-xl font-semibold mb-2">Contabilidad</h3>
          <p class="text-gray-600">Automatiza tus procesos contables y obtén informes financieros detallados para una mejor toma de decisiones.</p>
          <a href="#" class="inline-block mt-4 text-blue-600 hover:underline">Más información</a>
        </div>

        <!-- Facturación -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 text-green-600" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
          </svg>
          <h3 class="text-xl font-semibold mb-2">Facturación</h3>
          <p class="text-gray-600">Gestiona facturas, pagos y flujo de caja de manera eficiente con nuestro sistema de facturación integral.</p>
          <a href="#" class="inline-block mt-4 text-green-600 hover:underline">Más información</a>
        </div>

        <!-- CRM -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 text-red-600" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <h3 class="text-xl font-semibold mb-2">CRM</h3>
          <p class="text-gray-600">Optimiza la gestión de relaciones con clientes, seguimiento de ventas y campañas con nuestro sistema CRM.</p>
          <a href="#" class="inline-block mt-4 text-red-600 hover:underline">Más información</a>
        </div>
      </div>
    </div>
  </section>

<!--  Seccion de Valor-->
  <!--  Sección de Problemas y Soluciones ERP-->
  <section id="problemas-soluciones" data-aos="fade-up" class="border-b-2 mx-24 p-10">
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold mb-12 text-center text-gray-800">Identifica tus Problemas y Descubre Cómo los Solucionamos</h2>

      <!-- Descripción de la sección -->
      <div class="text-center mb-12">
        <p class="text-lg text-gray-600">Tu negocio podría estar enfrentando una serie de desafíos que limitan su crecimiento. Descubre cómo nuestro ERP está diseñado para abordar estos problemas y ayudarte a alcanzar el éxito.</p>
      </div>

      <!-- Sección de Problemas y Soluciones -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Problema 1 -->
        <div class="bg-gray-100 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
          <div class="flex justify-center mb-4">
            <svg class="w-12 h-12 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M12 16c4.418 0 8-3.582 8-8S16.418 0 12 0 4 3.582 4 8s3.582 8 8 8z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-center mb-4">Gestión Ineficiente del Inventario</h3>
          <p class="text-gray-600 text-center mb-6">El manejo manual de tu inventario provoca errores, desabastecimientos y pérdidas financieras.</p>
          <h4 class="text-xl font-bold text-center mb-4 text-blue-500">Nuestra Solución</h4>
          <p class="text-gray-600 text-center">Nuestro ERP te ofrece control automatizado en tiempo real del inventario, reduciendo errores y optimizando tus niveles de stock.</p>
        </div>

        <!-- Problema 2 -->
        <div class="bg-gray-100 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
          <div class="flex justify-center mb-4">
            <svg class="w-12 h-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c2.761 0 5-2.239 5-5S14.761 1 12 1 7 3.239 7 6s2.239 5 5 5zm-5 5h10a5 5 0 015 5v2H2v-2a5 5 0 015-5z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-center mb-4">Falta de Control Financiero</h3>
          <p class="text-gray-600 text-center mb-6">La dispersión de información financiera te impide tener una visión clara y en tiempo real de tu empresa.</p>
          <h4 class="text-xl font-bold text-center mb-4 text-blue-500">Nuestra Solución</h4>
          <p class="text-gray-600 text-center">Centralizamos toda tu información financiera en un solo lugar, brindándote reportes detallados y en tiempo real para mejorar la toma de decisiones.</p>
        </div>

        <!-- Problema 3 -->
        <div class="bg-gray-100 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
          <div class="flex justify-center mb-4">
            <svg class="w-12 h-12 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16s1-2 4-2 4 2 4 2 4-2 4-2 4 2 4 2v-4s-4 0-4-4V4s-1-1-4-1-4 1-4 1v4s-4 0-4 4v4z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-center mb-4">Procesos Manuales Lentos</h3>
          <p class="text-gray-600 text-center mb-6">Los procesos manuales y repetitivos consumen tiempo valioso y aumentan el riesgo de errores humanos.</p>
          <h4 class="text-xl font-bold text-center mb-4 text-blue-500">Nuestra Solución</h4>
          <p class="text-gray-600 text-center">Automatizamos tareas repetitivas y te ayudamos a ahorrar tiempo, mejorando la eficiencia de tu equipo.</p>
        </div>

        <!-- Problema 4 -->
        <div class="bg-gray-100 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
          <div class="flex justify-center mb-4">
            <svg class="w-12 h-12 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v2a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2a2 2 0 012-2V8a4 4 0 014-4h2a4 4 0 014 4z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-center mb-4">Falta de Colaboración entre Departamentos</h3>
          <p class="text-gray-600 text-center mb-6">La desconexión entre diferentes departamentos afecta la comunicación y los flujos de trabajo.</p>
          <h4 class="text-xl font-bold text-center mb-4 text-blue-500">Nuestra Solución</h4>
          <p class="text-gray-600 text-center">Nuestro ERP conecta todas las áreas de tu empresa, mejorando la comunicación interna y optimizando los flujos de trabajo.</p>
        </div>
      </div>

      <!-- CTA - Descubre más -->
      <div class="text-center mt-12">
        <p class="text-lg text-gray-600 mb-6">¿Te identificas con alguno de estos problemas? ¡Es momento de solucionarlos!</p>
        <a href="#contacto" class="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition">Contáctanos para Saber Más</a>
      </div>
    </div>
  </section>

  <!--  Seccion de contabilidad-->
  <section id="acconunting" data-aos="fade-left" class="border-b-2 mx-24  p-10">

    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl my-10 mb-24 font-bold text-center">Módulo de Contabilidad</h1>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div class="flex items-start space-x-4 group">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            <div>
              <h3 class="text-xl font-semibold group-hover:text-blue-500 transition-colors duration-300">Registros
                Financieros Precisos</h3>
              <p class="text-gray-600 mt-1">Lleva un control detallado de todas tus transacciones con nuestro sistema
                contable preciso y confiable.</p>
            </div>
          </div>
          <div class="flex items-start space-x-4 group">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-8 w-8 text-green-500 group-hover:text-green-600 transition-colors duration-300" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <div>
              <h3 class="text-xl font-semibold group-hover:text-green-500 transition-colors duration-300">Gestión de
                Libros Contables</h3>
              <p class="text-gray-600 mt-1">Administra tus libros mayores y balance general con eficiencia, asegurando
                claridad en la gestión financiera.</p>
            </div>
          </div>
          <div class="flex items-start space-x-4 group">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-8 w-8 text-purple-500 group-hover:text-purple-600 transition-colors duration-300" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <div>
              <h3 class="text-xl font-semibold group-hover:text-purple-500 transition-colors duration-300">Cumplimiento
                de Normativas</h3>
              <p class="text-gray-600 mt-1">Mantén tu contabilidad alineada con las normativas y regulaciones fiscales
                locales e internacionales.</p>
            </div>
          </div>
        </div>
        <div class="relative rounded-lg overflow-hidden shadow-lg">
          <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Panel contable en pantalla de computadora" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <p class="text-white text-2xl font-semibold text-center px-4">Optimiza tu Contabilidad Empresarial</p>
          </div>
        </div>
      </div>

      <div class="mt-12 bg-gray-100 rounded-lg p-6 shadow-md">
        <h2 class="text-2xl font-bold mb-4">¿Por qué elegir nuestro módulo de contabilidad?</h2>
        <ul class="space-y-3">
          <li class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                 fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"/>
            </svg>
            <span>Control exhaustivo de ingresos y egresos financieros</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                 fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"/>
            </svg>
            <span>Automatización de asientos contables y conciliación bancaria</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                 fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"/>
            </svg>
            <span>Generación automática de informes contables y financieros</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!--Seccion de facturacion-->
  <section id="billing" data-aos="fade-right" class="border-b-2 mx-24  p-10">
    <div class="container mx-auto  px-4 py-8">
      <h1 class="text-4xl my-10 mb-24 font-bold  text-center">Módulo de Facturación</h1>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div class="flex items-start space-x-4 group">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            <div>
              <h3 class="text-xl font-semibold group-hover:text-blue-500 transition-colors duration-300">Facturación
                Automatizada</h3>
              <p class="text-gray-600 mt-1">Genera y envía facturas de forma automática y rápida con un solo clic.</p>
            </div>
          </div>
          <div class="flex items-start space-x-4 group">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-8 w-8 text-green-500 group-hover:text-green-600 transition-colors duration-300" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <div>
              <h3 class="text-xl font-semibold group-hover:text-green-500 transition-colors duration-300">Informes de
                Facturación en Tiempo Real</h3>
              <p class="text-gray-600 mt-1">Accede a informes detallados y actualizados sobre tus facturas en tiempo
                real.</p>
            </div>
          </div>
          <div class="flex items-start space-x-4 group">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-8 w-8 text-purple-500 group-hover:text-purple-600 transition-colors duration-300" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <div>
              <h3 class="text-xl font-semibold group-hover:text-purple-500 transition-colors duration-300">Gestión
                Eficiente de Cobros</h3>
              <p class="text-gray-600 mt-1">Facilita el seguimiento y gestión de pagos pendientes con herramientas
                automatizadas.</p>
            </div>
          </div>
        </div>
        <div class="relative rounded-lg overflow-hidden shadow-lg">
          <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Pantalla de facturación" class="w-full h-full object-cover">
          <!--          <img src="/screenshot4.png" alt="Pantalla de facturación" class="w-full h-full object-cover">-->
          <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <p class="text-white text-2xl font-semibold text-center px-4">Optimiza tu proceso de facturación</p>
          </div>
        </div>
      </div>

      <div class="mt-12 bg-gray-100 rounded-lg p-6 shadow-md">
        <h2 class="text-2xl font-bold mb-4">¿Por qué elegir nuestro módulo de facturación?</h2>
        <ul class="space-y-3">
          <li class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                 fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"/>
            </svg>
            <span>Automatización total del proceso de facturación</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                 fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"/>
            </svg>
            <span>Informes detallados y personalizables de tus facturas</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                 fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"/>
            </svg>
            <span>Integración con otros módulos de finanzas y ERP</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

<!--  Seccion de CRM-->
  <section id="crm" data-aos="fade-right" class="border-b-2 mx-24  p-10">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl my-10 mb-24 font-bold text-center">Módulo de CRM</h1>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div class="flex items-start space-x-4 group">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h10m-5 8a8 8 0 100-16 8 8 0 000 16z"/>
            </svg>
            <div>
              <h3 class="text-xl font-semibold group-hover:text-blue-500 transition-colors duration-300">Gestión de
                Clientes Centralizada</h3>
              <p class="text-gray-600 mt-1">Controla toda la información de tus clientes desde una sola plataforma,
                facilitando la toma de decisiones basada en datos.</p>
            </div>
          </div>
          <div class="flex items-start space-x-4 group">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-8 w-8 text-green-500 group-hover:text-green-600 transition-colors duration-300" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h6l3 5 3-10h6"/>
            </svg>
            <div>
              <h3 class="text-xl font-semibold group-hover:text-green-500 transition-colors duration-300">Seguimiento
                Efectivo de Oportunidades</h3>
              <p class="text-gray-600 mt-1">Gestiona cada oportunidad de ventas y da seguimiento a tus prospectos para
                asegurar el éxito comercial.</p>
            </div>
          </div>
          <div class="flex items-start space-x-4 group">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-8 w-8 text-purple-500 group-hover:text-purple-600 transition-colors duration-300" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <div>
              <h3 class="text-xl font-semibold group-hover:text-purple-500 transition-colors duration-300">
                Automatización de Marketing</h3>
              <p class="text-gray-600 mt-1">Automatiza campañas de marketing personalizadas para captar y retener
                clientes de manera más eficiente.</p>
            </div>
          </div>
        </div>
        <div class="relative rounded-lg overflow-hidden shadow-lg">
          <img
              src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Dashboard CRM en pantalla" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <p class="text-white text-2xl font-semibold text-center px-4">Impulsa tus Ventas con CRM Inteligente</p>
          </div>
        </div>
      </div>

      <div class="mt-12 bg-gray-100 rounded-lg p-6 shadow-md">
        <h2 class="text-2xl font-bold mb-4">¿Por qué elegir nuestro módulo CRM?</h2>
        <ul class="space-y-3">
          <li class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                 fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"/>
            </svg>
            <span>Mejora la relación con tus clientes con interacciones personalizadas</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                 fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"/>
            </svg>
            <span>Centralización de datos de clientes y prospectos en una sola plataforma</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                 fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"/>
            </svg>
            <span>Segmentación de clientes para campañas de marketing dirigidas</span>
          </li>
        </ul>
      </div>
    </div>

  </section>

<!-- Seccion de precios-->
  <section id="pricing" data-aos="fade-down" class="border-b-2 mx-24  p-10">
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold mb-12 text-center text-gray-800">Planes de Precios</h2>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Plan 1: Instalación en tu dominio -->
        <div class="bg-gray-100 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
          <h3 class="text-2xl font-bold mb-4 text-center">Instalación en tu Dominio</h3>
          <p class="text-gray-600 text-center mb-6">Obtén el software instalado y funcionando en tu propio dominio, asegurando control total y personalización.</p>
          <div class="text-center text-4xl font-bold text-blue-500 mb-4">499€</div>
          <ul class="list-disc list-inside text-lg text-gray-600 mb-6">
            <li>Instalación única</li>
            <li>Propiedad total del dominio</li>
            <li>Soporte inicial para la configuración</li>
          </ul>
          <div class="text-center">
            <a href="#contact" class="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition">Elegir Plan</a>
          </div>
        </div>

        <!-- Plan 2: Acceso a la versión online -->
        <div class="bg-gray-100 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
          <h3 class="text-2xl font-bold mb-4 text-center">Acceso a la Versión Online</h3>
          <p class="text-gray-600 text-center mb-6">Utiliza el software online sin complicaciones, sin preocuparte por la instalación o el mantenimiento.</p>
          <div class="text-center text-4xl font-bold text-green-500 mb-4">39€/mes</div>
          <ul class="list-disc list-inside text-lg text-gray-600 mb-6">
            <li>Acceso inmediato</li>
            <li>No requiere instalación</li>
            <li>Solución en la nube</li>
            <li>Soporte 24/7</li>
          </ul>
          <div class="text-center">
            <a href="#contact" class="bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition">Elegir Plan</a>
          </div>
        </div>

        <!-- Plan 3: Modificación a medida -->
        <div class="bg-gray-100 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
          <h3 class="text-2xl font-bold mb-4 text-center">Modificación Personalizada del Software</h3>
          <p class="text-gray-600 text-center mb-6">Personaliza el software para satisfacer las necesidades específicas de tu negocio, asegurando que funcione tal como lo deseas.</p>
          <div class="text-center text-4xl font-bold text-purple-500 mb-4">Precio Personalizado</div>
          <ul class="list-disc list-inside text-lg text-gray-600 mb-6">
            <li>Opciones de personalización completas</li>
            <li>Equipo de desarrollo dedicado</li>
            <li>Precios flexibles según los requisitos</li>
          </ul>
          <div class="text-center">
            <a href="#contact" class="bg-purple-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-purple-600 transition">Contáctanos</a>
          </div>
        </div>
      </div>
    </div>
  </section>

<!--  Seccion de empresa-->
  <section id="empresa" data-aos="fade-up" class="bg-white border-b-2 mx-24 p-10">
    <div class="container mx-auto px-4 py-16">
      <div class="flex flex-col  items-center justify-center gap-8">
        <!-- Logo de la empresa -->
        <div class="flex items-center justify-center  mb-8 md:mb-0">
          <img src="/public/th.jpeg" alt="Logo de JCTAgency" class="w-48 h-48 object-cover rounded-full shadow-md">
        </div>

        <!-- Información de la empresa -->
        <div class="text-center w-1/2  md:text-left">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">JCTAgency</h2>
          <p class="text-lg text-gray-600 mb-6">Somos una agencia dedicada a ofrecer soluciones de software a medida para negocios de todo tipo. Con un enfoque personalizado, ayudamos a nuestros clientes a alcanzar sus metas digitales con la mejor tecnología y un equipo comprometido.</p>
          <a href="#contact" class="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition">Contáctanos</a>
        </div>
      </div>
    </div>
  </section>

  <!--  Sección de análisis gratuito-->
  <section id="analisis-digital-gratuito" data-aos="fade-left" class="border-b-2 mx-24 p-10">
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold mb-12 text-center text-gray-800">Obtén un Análisis Gratuito de Digitalización</h2>

      <!-- Descripción del análisis -->
      <div class="text-center mb-12">
        <p class="text-lg text-gray-600">Descubre cómo tu negocio puede beneficiarse de la transformación digital. Deja tus datos y nuestro equipo te proporcionará un análisis completo adaptado a tu industria.</p>
      </div>

      <!-- Formulario de inscripción -->
      <div class="bg-gray-100 p-8 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-8 text-center text-gray-800">Regístrate para tu Análisis Gratuito</h3>
        <form>
          <div class="grid md:grid-cols-3 gap-8 mb-6">
            <!-- Nombre de la Empresa -->
            <div>
              <label for="nombre-empresa" class="block text-lg text-gray-600 mb-2">Nombre de la Empresa</label>
              <input type="text" id="nombre-empresa" class="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nombre de tu empresa" required>
            </div>
            <!-- Sector -->
            <div>
              <label for="sector" class="block text-lg text-gray-600 mb-2">Sector</label>
              <input type="text" id="sector" class="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Sector industrial" required>
            </div>
            <!-- Correo Electrónico -->
            <div>
              <label for="correo" class="block text-lg text-gray-600 mb-2">Correo Electrónico</label>
              <input type="email" id="correo" class="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu correo" required>
            </div>
          </div>

          <!-- Botón de inscripción -->
          <div class="text-center">
            <button type="submit" class="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition">Regístrate Ahora</button>
          </div>
        </form>
      </div>
    </div>
  </section>


  <!--  Sección de contacto-->
  <section id="contact" data-aos="fade-right" class="border-b-2 mx-24 p-10">
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold mb-12 text-center text-gray-800">Contáctanos</h2>

      <!-- Información de contacto -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Contacto de Averías -->
        <div class="bg-gray-100 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
          <div class="flex justify-center mb-4">
            <svg class="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89-2.68a2 2 0 011.91.39L21 12M9 21v-4.8M9 16V8M5 8v8m10-8v8" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-center mb-4">Averías</h3>
          <p class="text-gray-600 text-center mb-6">Para soporte técnico y reportar averías, contáctanos a:</p>
          <p class="text-center text-lg text-gray-800">soporte@jctagency.com</p>
        </div>

        <!-- Contacto de Ventas -->
        <div class="bg-gray-100 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
          <div class="flex justify-center mb-4">
            <svg class="w-12 h-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h7l5 5 5-5H3m0 4h7m-7 4h13m-4 4h5" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-center mb-4">Ventas</h3>
          <p class="text-gray-600 text-center mb-6">Si tienes preguntas sobre nuestros planes de venta, escríbenos a:</p>
          <p class="text-center text-lg text-gray-800">ventas@jctagency.com</p>
        </div>

        <!-- Contacto de Información -->
        <div class="bg-gray-100 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
          <div class="flex justify-center mb-4">
            <svg class="w-12 h-12 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 00-12 0v5a2 2 0 01-2 2h0a2 2 0 002 2v-7m4 3a2 2 0 012 2v4m4-10v5a2 2 0 01-2 2h0a2 2 0 002 2v-4a2 2 0 012-2m0-4V6" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-center mb-4">Información</h3>
          <p class="text-gray-600 text-center mb-6">Para más información sobre nuestros servicios, contacta a:</p>
          <p class="text-center text-lg text-gray-800">info@jctagency.com</p>
        </div>
      </div>

      <!-- Formulario de contacto -->
      <div class="bg-gray-100 p-8 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-8 text-center text-gray-800">Envíanos un Mensaje</h3>
        <form>
          <div class="grid md:grid-cols-2 gap-8 mb-6">
            <!-- Nombre -->
            <div>
              <label for="nombre" class="block text-lg text-gray-600 mb-2">Nombre</label>
              <input type="text" id="nombre" class="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu nombre" required>
            </div>
            <!-- Correo Electrónico -->
            <div>
              <label for="correo" class="block text-lg text-gray-600 mb-2">Correo Electrónico</label>
              <input type="email" id="correo" class="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu correo" required>
            </div>
          </div>
          <!-- Asunto -->
          <div class="mb-6">
            <label for="asunto" class="block text-lg text-gray-600 mb-2">Asunto</label>
            <input type="text" id="asunto" class="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Asunto" required>
          </div>
          <!-- Mensaje -->
          <div class="mb-6">
            <label for="mensaje" class="block text-lg text-gray-600 mb-2">Mensaje</label>
            <textarea id="mensaje" class="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="5" placeholder="Escribe tu mensaje aquí" required></textarea>
          </div>
          <!-- Botón Enviar -->
          <div class="text-center">
            <button type="submit" class="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition">Enviar Mensaje</button>
          </div>
        </form>
      </div>
    </div>
  </section>


</template>

<script>
</script>

<style scoped>
</style>
