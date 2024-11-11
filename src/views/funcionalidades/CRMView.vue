<template>
  <head>
    <title>JesTy - CRM</title>
    <meta name="description" content="Gestiona tus relaciones con los clientes de forma eficiente con JesTy CRM. Centraliza la información de tus clientes y potencia tu crecimiento.">
    <meta name="keywords" content="CRM, gestión de clientes, relaciones comerciales, seguimiento de clientes">
    <link rel="canonical" href="https://jesty.com/crm">
    <meta property="og:title" content="JesTy - CRM">
    <meta property="og:description" content="Gestiona tus relaciones con los clientes de forma eficiente con JesTy CRM. Centraliza la información de tus clientes y potencia tu crecimiento.">
    <meta property="og:url" content="https://jesty.com/crm">
    <meta property="og:image" content="https://jesty.com/crm.jpg">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_ES">
    <meta property="og:site_name" content="JesTy">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="JesTy - CRM">
    <meta name="twitter:description" content="Gestiona tus relaciones con los clientes de forma eficiente con JesTy CRM. Centraliza la información de tus clientes y potencia tu crecimiento.">
  </head>

  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="hero-section bg-blue-500 text-white text-center py-20">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold mb-4">Gestiona tus relaciones con los clientes con eficiencia usando JesTy CRM</h1>
        <p class="text-xl mb-6">Centraliza toda la información de tus clientes y potencia tu crecimiento.</p>
        <button class="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Empieza ahora
        </button>
        <p class="mt-2 text-sm">Todo en un solo lugar, fácil y seguro</p>


      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Características que hacen de JesTy CRM tu mejor aliado</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
              title="Gestión centralizada"
              description="Accede a la información de tus clientes de forma rápida y sencilla."
              icon="📋"
          />
          <FeatureCard
              title="Automatización de tareas"
              description="Ahorra tiempo automatizando recordatorios y seguimientos."
              icon="⚙️"
          />
          <FeatureCard
              title="Análisis de clientes"
              description="Obtén informes detallados sobre el comportamiento de tus clientes."
              icon="📊"
          />
          <FeatureCard
              title="Integración con email y calendarios"
              description="Sincroniza con tus correos y calendarios para no perderte de ninguna interacción."
              icon="📅"
          />
        </div>
      </div>
    </section>

    <!-- Errors Section -->
    <section class="errors-section bg-gray-100 py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Evita los errores que afectan tus relaciones con los clientes</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ErrorCard
              title="Pérdida de oportunidades"
              description="No realizar el seguimiento adecuado y perder ventas potenciales."
          />
          <ErrorCard
              title="Confusión en la información"
              description="Datos dispersos que dificultan una gestión eficiente."
          />
          <ErrorCard
              title="Falta de personalización"
              description="No adaptarse a las necesidades individuales de cada cliente."
          />
          <ErrorCard
              title="Dificultad para medir el rendimiento"
              description="No poder evaluar el impacto de tus acciones comerciales."
          />
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="value-section py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">JesTy CRM lleva tu relación con clientes a otro nivel</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
              title="Mejora en la comunicación"
              description="Mantén una comunicación fluida y constante con tus clientes."
          />
          <ValueCard
              title="Aumenta la satisfacción del cliente"
              description="Responde de manera rápida y eficiente a las necesidades de tus clientes."
          />
          <ValueCard
              title="Aumenta la retención"
              description="Fortalece las relaciones con los clientes y fidelízalos."
          />
          <ValueCard
              title="Acceso remoto"
              description="Gestiona toda la información desde cualquier lugar y dispositivo."
          />
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section bg-blue-500 text-white text-center py-20">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-6">¿Listo para mejorar la gestión de tus clientes?</h2>
        <button class="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Prueba JesTy CRM gratis
        </button>
        <p class="mt-4 text-sm">Sin compromiso, cancela cuando quieras.</p>
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
  background-color: dodgerblue;
}
</style>
