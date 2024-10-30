<template>
 <head>
    <title>JesTy - Contabilidad</title>
    <meta name="description" content="Simplifica la contabilidad de tu negocio con JesTy. Automatiza asientos contables, concilia transacciones y genera reportes financieros.">
    <meta name="keywords" content="contabilidad, finanzas, asientos contables, reportes financieros, conciliación bancaria">
    <link rel="canonical" href="https://jesty.com/contabilidad">
    <meta property="og:title" content="JesTy - Contabilidad">
    <meta property="og:description" content="Simplifica la contabilidad de tu negocio con JesTy. Automatiza asientos contables, concilia transacciones y genera reportes financieros.">
    <meta property="og:url" content="https://jesty.com/contabilidad">
    <meta property="og:image" content="https://jesty.com/contabilidad.jpg">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_ES">
    <meta property="og:site_name" content="JesTy">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="JesTy - Contabilidad">
    <meta name="twitter:description" content="Simplifica la contabilidad de tu negocio con JesTy. Automatiza asientos contables, concilia transacciones y genera reportes financieros.">
    <meta name="twitter:image" content="https://jesty.com/contabilidad.jpg">
 </head>

  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="hero-section bg-blue-500 text-white text-center py-20">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold mb-4">Lleva la Contabilidad de tu negocio al siguiente nivel con JesTy</h1>
        <p class="text-xl mb-6">Olvídate del papeleo y las largas horas revisando tus finanzas. Simplifica la contabilidad.</p>
        <button class="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Empieza ahora
        </button>
        <p class="mt-2 text-sm">100% seguro, rápido y preciso para tu negocio.</p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Funciones de Contabilidad que facilitan tu gestión financiera</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
              title="Automatización de asientos contables"
              description="Genera asientos contables de manera automática a partir de las transacciones."
              icon="🧾"
          />
          <FeatureCard
              title="Integración con bancos"
              description="Conecta con tus cuentas bancarias para conciliar transacciones fácilmente."
              icon="🏦"
          />
          <FeatureCard
              title="Reportes financieros"
              description="Genera reportes de estado de resultados, balance general y flujo de caja."
              icon="📊"
          />
          <FeatureCard
              title="Soporte para múltiples divisas"
              description="Gestiona tus finanzas con facilidad en diferentes monedas."
              icon="💱"
          />
        </div>
      </div>
    </section>

    <!-- Errors Section -->
    <section class="errors-section bg-gray-100 py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Errores comunes que te ahorramos con JesTy</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ErrorCard
              title="Descuadres en los asientos contables"
              description="Errores al hacer manualmente los asientos de las transacciones."
          />
          <ErrorCard
              title="Retrasos en la conciliación bancaria"
              description="Tardar horas conciliando tus cuentas y los movimientos bancarios."
          />
          <ErrorCard
              title="Errores en los reportes financieros"
              description="Reportes mal estructurados o sin información clave para decisiones importantes."
          />
          <ErrorCard
              title="Problemas con la gestión de divisas"
              description="Difícil seguimiento y control de transacciones en diferentes monedas."
          />
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="value-section py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">El valor que JesTy aporta a la contabilidad de tu negocio</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
              title="Automatización y precisión"
              description="Reduce los errores humanos y automatiza procesos contables repetitivos."
          />
          <ValueCard
              title="Control financiero en tiempo real"
              description="Monitorea el estado financiero de tu negocio al instante."
          />
          <ValueCard
              title="Simplificación de procesos"
              description="Agiliza tareas tediosas como la conciliación y generación de reportes."
          />
          <ValueCard
              title="Optimización de recursos"
              description="Ahorras tiempo y costos en la gestión contable con una herramienta todo-en-uno."
          />
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section bg-blue-500 text-white text-center py-20">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-6">¿Listo para transformar la contabilidad de tu negocio?</h2>
        <button class="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Prueba JesTy gratis
        </button>
        <p class="mt-4 text-sm">Sin compromisos, cancela en cualquier momento.</p>
      </div>
    </section>
  </div>
</template>

<script setup>

import ValueCard from "@/components/ValueCard.vue";
import ErrorCard from "@/components/ErrorCard.vue";
import FeatureCard from "@/components/FeatureCard.vue";
</script>

<style scoped>
.hero-section {
  background-image: url('/public/hero_section4.jpg'); /* Cambia la imagen según sea necesario */
  background-size: cover;
  background-position: center;
}
.features-section, .errors-section, .value-section {
  background-color: #f9fafb;
}
.cta-section {
  background-color: #1e3a8a;
}
</style>
