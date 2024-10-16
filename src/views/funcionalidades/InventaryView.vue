<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="hero-section bg-blue-500 text-white text-center py-20">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold mb-4">Gestión eficiente de tu Inventario con JesTy</h1>
        <p class="text-xl mb-6">Mantén tu inventario siempre actualizado y disponible, asegurando que nunca te falten productos clave.</p>
        <button class="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Comienza a gestionar
        </button>
        <p class="mt-2 text-sm">Organiza tu inventario, controla tus productos y mejora tu cadena de suministro.</p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Características que hacen de JesTy la mejor opción para Inventarios</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
              title="Control en tiempo real"
              description="Conoce el estado de tu inventario en cualquier momento."
              icon="📦"
          />
          <FeatureCard
              title="Alertas de stock bajo"
              description="Recibe notificaciones cuando los productos estén por debajo del nivel mínimo."
              icon="🚨"
          />
          <FeatureCard
              title="Gestión de múltiples almacenes"
              description="Administra inventarios en varias ubicaciones desde una sola plataforma."
              icon="🏬"
          />
          <FeatureCard
              title="Actualizaciones automáticas"
              description="Sincronización automática de inventario con tus ventas y compras."
              icon="🔄"
          />
        </div>
      </div>
    </section>

    <!-- Errors Section -->
    <section class="errors-section bg-gray-100 py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Evita los errores que pueden afectar tus operaciones</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ErrorCard
              title="Falta de stock"
              description="Perder ventas por no tener suficientes productos disponibles."
          />
          <ErrorCard
              title="Inventario no actualizado"
              description="Tener datos desactualizados y confusión sobre el estado real del inventario."
          />
          <ErrorCard
              title="Exceso de inventario"
              description="Almacenar productos que no rotan, afectando tus finanzas."
          />
          <ErrorCard
              title="Falta de control de ubicación"
              description="No saber dónde se encuentran los productos dentro del almacén."
          />
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="value-section py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Lleva la gestión de tu inventario al siguiente nivel</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
              title="Optimización de espacios"
              description="Organiza mejor tu almacén para aprovechar cada metro cuadrado."
          />
          <ValueCard
              title="Visibilidad completa"
              description="Obtén reportes detallados sobre el estado de tu inventario."
          />
          <ValueCard
              title="Integración con ventas"
              description="Conecta tu inventario con tus ventas y compras para una gestión más eficiente."
          />
          <ValueCard
              title="Acceso desde cualquier lugar"
              description="Controla tu inventario desde cualquier dispositivo, en cualquier lugar."
          />
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section bg-blue-500 text-white text-center py-20">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-6">¿Listo para transformar la gestión de tu inventario?</h2>
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
  background-color: dodgerblue;
}
</style>
