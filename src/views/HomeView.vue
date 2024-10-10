<template>
 <div class="flex flex-col min-h-screen">
<!--   //HeroSection Informacion del ERP imagen de fondo y texto-->
     <div class=" flex hero-section items-center justify-end h-screen bg-cover bg-bottom" >
       <div data-aos="fade-right" class="w-1/2 space-y-10 items-start justify-start flex flex-col text-white">
         <h1 class="text-5xl text-blue-500 font-bold">Gestiona tu empresa de forma centralizada</h1>
         <p class="text-2xl text-gray-400">Optimiza tu negocio con nuestras herramientas modernas y efectivas.</p>
<!--         <div>-->
<!--           <img src="/public/POPLogo.jpeg" class="w-52 h-52 rounded-xl shadow-2xl shadow-gray-50 " alt="">-->
<!--         </div>-->
         <div class="space-x-10 justify-center text-blue-700">
           <button class="mt-6  bg-blue-400 text-white px-3 py-3 font-semibold bg-gradient-to-bl hover:from-blue-500 hover:to-blue-900 hover:text-white rounded-lg">Solicitar mes de prueba</button>
           <a href="#" class="text-gray-400 hover:text-blue-700 text-sm font-semibold leading-6 ">Habla con un experto<span aria-hidden="true">→</span></a>
         </div>
       </div>
<!--       <div class="w-1/2 flex-col flex py-20">-->
<!--         <img data-aos="zoom-in" class="w-5/6" src="/public/banner_img2.png" alt="">-->
<!--       </div>-->
     </div>

<!--   //seccion de Caracteristicas del software-->
     <div data-aos="fade-up" class="overflow-hidden bg-white py-24 sm:py-32">
       <div class="mx-auto max-w-7xl px-6 lg:px-8">
         <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
           <div class="lg:pr-8 lg:pt-4">
             <div class="lg:max-w-lg">
               <h2 class="text-base font-semibold leading-7 text-blue-600">POPERP: </h2>
               <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tu Empresa, Tu Control.</p>
               <p class="mt-6 text-lg leading-8 text-gray-600">POP ERP es la solución ideal para pequeñas y medianas empresas que buscan simplificar sus operaciones. Desde facturación hasta gestión de clientes y productos, te permite centralizar todas las funciones esenciales en una plataforma fácil de usar, ayudando a mejorar la eficiencia y el crecimiento.</p>
               <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                 <div class="relative flex-col flex pl-9">
                   <dt class="inline font-semibold text-gray-900">
                     <svg class="absolute left-1 top-1 h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                       <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                     </svg>
                     Gestión Integral de Facturación y Contabilidad
                   </dt>
                   <dd class="inline">Automatiza tus finanzas y mantén todo bajo control con reportes precisos.

                   </dd>
                 </div>
                 <div class="relative flex flex-col pl-9">
                   <dt class="inline font-semibold text-gray-900">
                     <svg class="absolute left-1 top-1 h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                       <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                     </svg>
                     Gestión de Inventario y TPV
                   </dt>
                   <dd class="inline">
                     Controla tu stock en tiempo real y procesa ventas de manera rápida desde cualquier lugar.
                   </dd>
                 </div>
                 <div class="relative flex flex-col pl-9">
                   <dt class="inline font-semibold text-gray-900">
                     <svg class="absolute left-1 top-1 h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                       <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                       <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                     </svg>
                     Gestión de Clientes Eficiente
                   </dt>
                   <dd class="inline">Organiza la información de tus clientes y mejora la relación con ellos a través de un seguimiento centralizado.</dd>
                 </div>
               </dl>
             </div>
           </div>
           <img src="/public/screanshot1.png" alt="Product screenshot" class="w-[48rem] max-w-none bg-gray-900 rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442">
         </div>
       </div>
     </div>




   <!--   //CTA( Solicitar mes de prueva!)-->
   <div data-aos="flip-left" class="bg-white">
     <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
       <div class="relative isolate overflow-hidden bg-gradient-to-bl from-blue-500 to-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
         <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
           <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">¡Simplifica la gestión de eu empresa hoy!</h2>
           <p class="mt-6 text-lg leading-8 text-gray-300">Centraliza todas las operaciones de tu negocio con POP ERP. Desde la facturación hasta la gestión de clientes, descubre cómo este software puede ahorrarte tiempo y esfuerzo.</p>
           <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
             <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Prueba Gratis</a>
             <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
           </div>
         </div>
         <div class="relative mt-16 h-80 lg:mt-8">
           <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="/public/scranshot2.png" alt="App screenshot" width="1824" height="1080">
         </div>
       </div>
     </div>
   </div>
   <!--   Visualizacion de dashboard del software y de sus funcionalidades(Imagen y descripcion)-->

<!--   Seccion de clientes (carrusel de logos de empresas que usan el software)-->
   <div data-aos="fade-up" class="bg-white py-24 sm:py-32">
     <div class="mx-auto max-w-7xl px-6 lg:px-8">
       <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Nuestros clientes confían en POPERP</h2>
       <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
         <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48">
         <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48">
         <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48">
         <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48">
         <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48">
       </div>
     </div>
   </div>

<!--   //Testimonios, casos de exito-->
   <section data-aos="fade-up" class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
     <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] opacity-20"></div>
     <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
     <div class="mx-auto max-w-2xl lg:max-w-4xl">
       <img class="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-blue-600.svg" alt="">
       <figure class="mt-10">
         <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
           <p>"POP ERP ha transformado completamente la forma en que gestionamos nuestro negocio. Ahora todo está centralizado, lo que nos ahorra tiempo y nos permite enfocarnos en lo que realmente importa: nuestros clientes."</p>
         </blockquote>
         <figcaption class="mt-10">
           <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
           <div class="mt-4 flex items-center justify-center space-x-3 text-base">
             <div class="font-semibold text-gray-900">Ana Martínez</div>
             <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
               <circle cx="1" cy="1" r="1" />
             </svg>
             <div class="text-gray-600">Directora de Operaciones, Grupo Empresarial Beltrán</div>
           </div>
         </figcaption>
       </figure>
     </div>
   </section>

<!--   //Seccion de funcionalidades del software-->
   <div data-aos="fade-down" class="overflow-hidden bg-white py-24 sm:py-32">
     <div class="mx-auto max-w-7xl px-6 lg:px-8">
       <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
         <div class="lg:pr-8 lg:pt-4">
           <div class="lg:max-w-lg">
             <h2 class="text-base font-semibold leading-7 text-blue-600">Todo lo que necessitas en un solo lugar</h2>
             <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Funcionalidades que impulsan tu negocio.</p>
             <p class="mt-6 text-lg leading-8 text-gray-600">POP ERP ofrece una amplia gama de funcionalidades diseñadas para optimizar la gestión de tu empresa. Con herramientas integradas y fáciles de usar, podrás mejorar la eficiencia y el control en todas tus operaciones.</p>
             <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
               <div class="relative pl-9">
                 <dt class="inline font-semibold text-gray-900">
                   <svg class="absolute left-1 top-1 h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                     <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                   </svg>
                   Facturación y Contabilidad
                 </dt>
                 <dd class="inline">Automatiza la generación de facturas y lleva un control contable preciso.</dd>
               </div>
               <div class="relative pl-9">
                 <dt class="inline font-semibold text-gray-900">
                   <svg class="absolute left-1 top-1 h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                     <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                   </svg>
                   Gestión de Inventarios
                 </dt>
                 <dd class="inline">Mantén el control de tu stock en tiempo real y gestiona tus productos eficientemente.</dd>
               </div>
               <div class="relative pl-9">
                 <dt class="inline font-semibold text-gray-900">
                   <svg class="absolute left-1 top-1 h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                     <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                     <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                   </svg>
                   CRM Integrado
                 </dt>
                 <dd class="inline">Optimiza la relación con tus clientes, gestionando su información y seguimiento de ventas en un solo lugar.</dd>
               </div>
             </dl>
           </div>
         </div>
         <img src="/public/screenshot3.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442">
       </div>
     </div>
   </div>

<!--   Seguridad y confiabilidad del software-->
   <div data-aos="fade-up" class="bg-white py-24 sm:py-32">
     <div class="mx-auto max-w-7xl px-6 lg:px-8">
       <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
         <div class="mx-auto flex max-w-xs flex-col gap-y-4">
           <dt class="text-base leading-7 text-gray-600">Ahorro en Tiempo</dt>
           <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">80%</dd>
         </div>
         <div class="mx-auto flex max-w-xs flex-col gap-y-4">
           <dt class="text-base leading-7 text-gray-600">Satisfacción del Cliente</dt>
           <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">97%</dd>
         </div>
         <div class="mx-auto flex max-w-xs flex-col gap-y-4">
           <dt class="text-base leading-7 text-gray-600">Incremento de facturación</dt>
           <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">30%</dd>
         </div>
       </dl>
     </div>
   </div>

<!--   Pan de precios y planes-->
   <div data-aos="zoom-in" class="bg-white py-24 sm:py-32">
     <div class="mx-auto max-w-7xl px-6 lg:px-8">
       <div class="mx-auto max-w-2xl sm:text-center">
         <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">POPERP: Solución Integral para PYMES</h2>
         <p class="mt-6 text-lg leading-8 text-gray-600">Un ERP online desarrollado por JCTAGENCY que centraliza las operaciones esenciales de la empresa en un solo lugar. Ideal para pymes que buscan una solución todo en uno, desde la gestión de inventarios hasta la facturación.</p>
       </div>
       <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
         <div class="p-8 sm:p-10 lg:flex-auto">
           <h3 class="text-2xl font-bold tracking-tight text-gray-900">Plan sencillo</h3>
           <p class="mt-6 text-base leading-7 text-gray-600">Incluye un unico servicio</p>
           <div class="mt-10 flex items-center gap-x-4">
             <h4 class="flex-none text-sm font-semibold leading-6 text-blue-600">Que incluye?</h4>
             <div class="h-px flex-auto bg-gray-100"></div>
           </div>
           <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
             <li class="flex gap-x-3">
               <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
               </svg>
               Número ilimitado de usuarios
             </li>
             <li class="flex gap-x-3">
               <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
               </svg>
               Soporte 24/7
             </li>
             <li class="flex gap-x-3">
               <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
               </svg>
               Actualizaciones automáticas
             </li>
             <li class="flex gap-x-3">
               <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
               </svg>
               Integración con otras plataformas
             </li>
           </ul>
         </div>
         <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
           <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
             <div class="mx-auto max-w-xs px-8">
               <p class="text-base font-semibold text-gray-600">Servicio mensual</p>
               <p class="mt-6 flex items-baseline justify-center gap-x-2">
                 <span class="text-5xl font-bold tracking-tight text-gray-900">49€/mes</span>
                 <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">EUR</span>
               </p>
               <a href="#" class="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Contratar el servicio</a>
             </div>
           </div>
         </div>
       </div>
     </div>

     <div class="mx-auto max-w-7xl px-6 lg:px-8">
       <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
         <div class="p-8 sm:p-10 lg:flex-auto">
           <h3 class="text-2xl font-bold tracking-tight text-gray-900">Plan Completo</h3>
           <p class="mt-6 text-base leading-7 text-gray-600">Incluye todos los modulos</p>
           <div class="mt-10 flex items-center gap-x-4">
             <h4 class="flex-none text-sm font-semibold leading-6 text-blue-600">Que incluye?</h4>
             <div class="h-px flex-auto bg-gray-100"></div>
           </div>
           <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
             <li class="flex gap-x-3">
               <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
               </svg>
              Número ilimitado de usuarios
             </li>
             <li class="flex gap-x-3">
               <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
               </svg>
                Soporte 24/7
             </li>
             <li class="flex gap-x-3">
               <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
               </svg>
                Actualizaciones automáticas
             </li>
             <li class="flex gap-x-3">
               <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
               </svg>
                Integración con otras plataformas
             </li>
           </ul>
         </div>
         <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
           <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
             <div class="mx-auto max-w-xs px-8">
               <p class="text-base font-semibold text-gray-600">Servicio mensual</p>
               <p class="mt-6 flex items-baseline justify-center gap-x-2">
                 <span class="text-5xl font-bold tracking-tight text-gray-900">199€/mes</span>
                 <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">EUR</span>
               </p>
               <a href="#" class="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Contratar el servicio</a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>


   <!--   //CTA (Habla con un experto)-->
   <div data-aos="flip-left" class="bg-white">
     <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
       <div class="relative isolate overflow-hidden bg-gradient-to-bl from-blue-500 to-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
         <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
           <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">¡Controla todo desde un solo lugar!</h2>
           <p class="mt-6 text-lg leading-8 text-gray-300">Con POP ERP puedes tener el control total de tus finanzas, inventarios y más. Empieza a gestionar de manera eficiente y lleva tu negocio al siguiente nivel. </p>
           <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
             <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Comienza Ahora
             </a>
             <a href="#" class="text-sm font-semibold leading-6 text-white">Habla con un experto<span aria-hidden="true">→</span></a>
           </div>
         </div>
         <div class="relative mt-16 h-80 lg:mt-8">
           <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="/public/screenshot5.png" alt="App screenshot" width="1824" height="1080">
         </div>
       </div>
     </div>
   </div>

<!--   Seccion de Galeria-->

   <section data-aos="zoom-in" class="py-12 bg-gray-50">
     <div class="container mx-auto">
       <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Galería</h2>
       <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         <div class="group">
           <img src="/public/screenshot1.png" alt="Image 1" class="w-full h-auto rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
           <div class="mt-2 text-center">
             <h3 class="text-lg font-semibold text-gray-800">Panel del Usuario</h3>
           </div>
         </div>
         <div class="group">
           <img src="/public/screenshot2.png" alt="Image 2" class="w-full h-auto rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
           <div class="mt-2 text-center">
             <h3 class="text-lg font-semibold text-gray-800">Panel de Productos</h3>
           </div>
         </div>
         <div class="group">
           <img src="/public/screenshot3.png" alt="Image 3" class="w-full h-auto rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
           <div class="mt-2 text-center">
             <h3 class="text-lg font-semibold text-gray-800">Formulario de creacion de pressupuesto</h3>
           </div>
         </div>
         <div class="group">
           <img src="/public/screenshot4.png" alt="Image 4" class="w-full h-auto rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
           <div class="mt-2 text-center">
             <h3 class="text-lg font-semibold text-gray-800">Vista general de una factura</h3>
           </div>
         </div>
         <div class="group">
           <img src="/public/screenshot5.png" alt="Image 5" class="w-full h-auto rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
           <div class="mt-2 text-center">
             <h3 class="text-lg font-semibold text-gray-800">Login</h3>
           </div>
         </div>
         <div class="group">
           <img src="/public/screenshot6.png" alt="Image 6" class="w-full h-auto rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
           <div class="mt-2 text-center">
             <h3 class="text-lg font-semibold text-gray-800">Modelo de impresion</h3>
           </div>
         </div>
       </div>
     </div>
   </section>


 </div>
 </template>

<script>
import emailjs from 'emailjs-com';


export default {
  data() {
    return {
      isFormSubmitted: false,
      submitedError: false,
      formFields: {
        nombre: '',
        email: '',
        mensaje: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      emailjs.sendForm('service_uaggcy8', 'template_yav8r89', this.$el.querySelector('form'), 'PrtHsOGCYBrChfJU3')
          .then((result) => {
            console.log(result.text);
            this.isFormSubmitted = true;
            this.clearFormFields();
          })
          .catch((error) => {
            console.log(error.text);
            this.isFormSubmitted = false;
            this.submitedError = true;
          });
    },
    clearFormFields() {
      this.formFields = {
        nombre: '',
        email: '',
        mensaje: ''
      };
    }
  }
};
</script>

<style scoped>
.hero-section {
  background-image: url('/public/hero_section2.jpg');
  background-size: cover;
  background-position: center;
}


</style>
