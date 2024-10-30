<template>
  <head >
    <title>JesTy - Facturación</title>
    <meta name="description" content="Simplifica la facturación de tu negocio con JesTy. Genera facturas, controla pagos y vencimientos, y gestiona múltiples empresas desde una sola cuenta.">
    <meta name="keywords" content="facturación, gestión de facturas, control de pagos, vencimientos, múltiples empresas">
    <link rel="canonical" href="https://jesty.com/facturacion">
    <meta property="og:title" content="JesTy - Facturación">
    <meta property="og:description" content="Simplifica la facturación de tu negocio con JesTy. Genera facturas, controla pagos y vencimientos, y gestiona múltiples empresas desde una sola cuenta.">
    <meta property="og:url" content="https://jesty.com/facturacion">
    <meta property="og:image" content="https://jesty.com/facturacion.jpg">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_ES">
    <meta property="og:site_name" content="JesTy">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="JesTy - Facturación">
    <meta name="twitter:description" content="Simplifica la facturación de tu negocio con JesTy. Genera facturas, controla pagos y vencimientos, y gestiona múltiples empresas desde una sola cuenta.">
    <meta name="twitter:image" content="https://jesty.com/facturacion.jpg">
  </head>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="hero-section bg-blue-500 text-white text-center py-20">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold mb-4">Gestiona tu Facturación de manera eficiente con JesTy</h1>
        <p class="text-xl mb-6">Olvídate de los errores en tus facturas y dedícate a lo que realmente importa: hacer crecer tu negocio.</p>
        <button class="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Empieza ahora
        </button>
        <p class="mt-2 text-sm">100% seguro, rápido y fácil de usar</p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Características que hacen de JesTy la mejor opción</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
              title="Automatización de facturas"
              description="Genera facturas automáticamente a partir de tus presupuestos."
              icon="⚙️"
          />
          <FeatureCard
              title="Integración con sistemas contables"
              description="Compatible con las principales plataformas contables."
              icon="🔗"
          />
          <FeatureCard
              title="Seguimiento en tiempo real"
              description="Monitorea tus pagos y vencimientos desde un solo lugar."
              icon="⏰"
          />
          <FeatureCard
              title="Soporte multi-empresa"
              description="Gestiona múltiples empresas desde una sola cuenta."
              icon="🏢"
          />
        </div>
      </div>
    </section>

    <!-- Errors Section -->
    <section class="errors-section bg-gray-100 py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Evita los errores que le cuestan a tu negocio</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ErrorCard
              title="Errores en los montos"
              description="Facturas con cantidades incorrectas o totales mal calculados."
          />
          <ErrorCard
              title="Plazos vencidos"
              description="Olvidarse de fechas de pago o vencimientos de facturas."
          />
          <ErrorCard
              title="Confusión entre clientes"
              description="Mezclar facturas de distintos clientes o no poder encontrarlas fácilmente."
          />
          <ErrorCard
              title="Facturación no profesional"
              description="Enviar facturas desorganizadas o sin una estructura clara."
          />
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="value-section py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">JesTy te ayuda a llevar tu negocio al siguiente nivel</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
              title="Ahorro de tiempo"
              description="Automatiza procesos repetitivos y reduce el trabajo manual."
          />
          <ValueCard
              title="Visión clara de tu flujo de caja"
              description="Resumen de ingresos, gastos y pronósticos financieros."
          />
          <ValueCard
              title="Personalización de facturas"
              description="Adapta tus facturas a la imagen de tu empresa con logos y colores."
          />
          <ValueCard
              title="Acceso desde cualquier lugar"
              description="Plataforma 100% en la nube para que gestiones tu negocio desde cualquier dispositivo."
          />
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section bg-blue-500 text-white text-center py-20">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-6">¿Listo para transformar tu gestión de facturación?</h2>
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
