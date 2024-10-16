<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="hero-section bg-blue-500 text-white text-center py-20">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold mb-4">Gestiona tus Clientes de manera eficiente con JesTy</h1>
        <p class="text-xl mb-6">Mantén organizada toda la información de tus clientes y potencia las relaciones comerciales.</p>
        <button class="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Registra un nuevo cliente
        </button>
        <p class="mt-2 text-sm">100% seguro, rápido y fácil de usar</p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Características que hacen de JesTy la mejor opción para la gestión de clientes</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
              title="Historial completo de clientes"
              description="Accede rápidamente a los datos de contacto, historial de compras y facturación."
              icon="📊"
          />
          <FeatureCard
              title="Gestión de relaciones"
              description="Mantén un registro detallado de tus interacciones y mejoras con tus clientes."
              icon="🤝"
          />
          <FeatureCard
              title="Segmentación de clientes"
              description="Organiza a tus clientes por categorías o grupos según tus necesidades."
              icon="📁"
          />
          <FeatureCard
              title="Integración con CRM"
              description="Sincroniza tus datos de clientes con tus sistemas CRM para mejorar el flujo de información."
              icon="🔄"
          />
        </div>
      </div>
    </section>

    <!-- Errors Section -->
    <section class="errors-section bg-gray-100 py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Errores comunes en la gestión de clientes</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ErrorCard
              title="Datos de clientes desactualizados"
              description="Mantener información antigua o incorrecta puede llevar a errores."
          />
          <ErrorCard
              title="Falta de comunicación"
              description="Perder oportunidades de venta por no seguir el estado de las relaciones con los clientes."
          />
          <ErrorCard
              title="Confusión con contactos"
              description="Confundir los detalles de clientes con otros, lo que causa confusión en las comunicaciones."
          />
          <ErrorCard
              title="Falta de organización"
              description="Gestionar mal los datos de clientes lleva a retrasos y errores en las interacciones."
          />
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="value-section py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Mejora la gestión de tus clientes con JesTy</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
              title="Fidelización de clientes"
              description="Fortalece tus relaciones con los clientes mediante un seguimiento eficaz."
          />
          <ValueCard
              title="Optimización de tiempo"
              description="Reduce el tiempo de búsqueda de datos y optimiza tus interacciones."
          />
          <ValueCard
              title="Visión completa del cliente"
              description="Consulta todo el historial de un cliente desde un solo lugar."
          />
          <ValueCard
              title="Accesibilidad en cualquier momento"
              description="Accede a la información de tus clientes en cualquier lugar desde la nube."
          />
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section bg-blue-500 text-white text-center py-20">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-6">¿Listo para mejorar la gestión de tus clientes?</h2>
        <button class="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Comienza con JesTy
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
</style>
