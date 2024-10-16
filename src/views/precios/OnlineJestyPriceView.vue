<template>
  <section class="pricing-section bg-blue-900 text-white py-16">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold mb-4">Precios adaptados a tus necesidades</h1>
      <p class="text-lg mb-6">Empieza con 14 días gratis, continúa con un plan al 50% de descuento durante 3 meses.</p>

      <!-- Tabs for business types -->
      <div class="flex justify-center mb-10 space-x-4">
        <button class="bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-600">Empresas pequeñas</button>
        <button class="bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-600">Empresas medianas</button>
        <button class="bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-600">Autónomos</button>
        <button class="bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-600">Asesorías</button>
      </div>

      <!-- Pricing Plans -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Plan Plus -->
        <div class="bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold mb-4">Plus</h2>
          <p class="text-4xl font-bold mb-4">7,50 € <span class="text-lg">/mes</span></p>
          <p class="text-sm line-through mb-2">15,00 €</p>
          <p class="text-sm mb-6">Ahorra 22,50 € en 3 meses</p>
          <ul class="text-left space-y-3 mb-6">
            <li>✔ 1 usuario</li>
            <li>✔ Facturas y presupuestos</li>
            <li>✔ Tu propio diseño de documentos</li>
            <li>✔ Conecta 1 banco</li>
            <li>✔ Informes básicos</li>
            <li>✘ Gestión de empleados</li>
            <li>✘ Roles de usuario</li>
            <li>✘ Cobros y pagos en masa</li>
            <li>✘ Contabilidad</li>
          </ul>
          <button class="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700">Empieza ahora</button>
        </div>

        <!-- Plan Básico -->
        <div class="bg-purple-100 text-purple-900 p-6 rounded-lg shadow-lg border-2 border-purple-500">
          <h2 class="text-xl font-bold mb-4">Básico</h2>
          <p class="text-4xl font-bold mb-4">14,50 € <span class="text-lg">/mes</span></p>
          <p class="text-sm line-through mb-2">29,00 €</p>
          <p class="text-sm mb-6">Ahorra 43,50 € en 3 meses</p>
          <ul class="text-left space-y-3 mb-6">
            <li>✔ 2 usuarios</li>
            <li>✔ Facturas y presupuestos</li>
            <li>✔ Tu propio diseño de documentos</li>
            <li>✔ Conecta 5 bancos</li>
            <li>✔ Informes básicos</li>
            <li>✔ Gestión de empleados</li>
            <li>✘ Roles de usuario</li>
            <li>✘ Cobros y pagos en masa</li>
            <li>✘ Contabilidad</li>
          </ul>
          <button class="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-400">Empieza ahora</button>
        </div>

        <!-- Plan Estándar -->
        <div class="bg-green-100 text-green-900 p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold mb-4">Estándar</h2>
          <p class="text-4xl font-bold mb-4">29,50 € <span class="text-lg">/mes</span></p>
          <p class="text-sm line-through mb-2">59,00 €</p>
          <p class="text-sm mb-6">Ahorra 88,50 € en 3 meses</p>
          <ul class="text-left space-y-3 mb-6">
            <li>✔ 4 usuarios</li>
            <li>✔ Facturas y presupuestos</li>
            <li>✔ Tu propio diseño de documentos</li>
            <li>✔ Todos tus bancos conectados</li>
            <li>✔ Informes avanzados</li>
            <li>✔ Gestión de empleados</li>
            <li>✔ Roles de usuario</li>
            <li>✔ Cobros y pagos en masa</li>
            <li>✔ Contabilidad</li>
          </ul>
          <button class="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500">Empieza ahora</button>
        </div>
      </div>

      <a href="#" class="text-blue-200 mt-6 inline-block">Compara todas las funcionalidades →</a>
    </div>
  </section>
</template>

<script setup>
// No se requieren scripts adicionales en este caso
</script>

<style scoped>
.pricing-section {
  background: linear-gradient(180deg, #0a2540 0%, #031a31 100%);
}
button {
  transition: background-color 0.3s ease;
}
</style>

