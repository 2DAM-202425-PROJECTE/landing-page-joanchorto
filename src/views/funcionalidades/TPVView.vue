<template>
  <head>
    <title>JesTy - TPV</title>
    <meta name="description" content="Optimiza tu gestión de ventas con JesTy TPV. Controla todas tus ventas desde un solo lugar, de manera rápida y eficiente.">
    <meta name="keywords" content="TPV, punto de venta, ventas, gestión de ventas, control de stock">
    <link rel="canonical" href="https://jesty.com/tpv">
    <meta property="og:title" content="JesTy - TPV">
    <meta property="og:description" content="Optimiza tu gestión de ventas con JesTy TPV. Controla todas tus ventas desde un solo lugar, de manera rápida y eficiente.">
    <meta property="og:url" content="https://jesty.com/tpv">
    <meta property="og:image" content="https://jesty.com/tpv.jpg">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_ES">
    <meta property="og:site_name" content="JesTy">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="JesTy - TPV">
  </head>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="hero-section bg-blue-500 text-white text-center py-20">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold mb-4">Optimiza tu gestión de ventas con JesTy TPV</h1>
        <p class="text-xl mb-6">Controla todas tus ventas desde un solo lugar, de manera rápida y eficiente.</p>
        <button class="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Empieza ahora
        </button>
        <p class="mt-2 text-sm">Fácil, rápido y accesible desde cualquier dispositivo</p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Características que hacen de JesTy TPV la mejor opción</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
              title="Venta rápida"
              description="Realiza ventas en segundos con una interfaz simple y ágil."
              icon="⚡"
          />
          <FeatureCard
              title="Gestión de inventario"
              description="Controla el stock en tiempo real mientras vendes."
              icon="📦"
          />
          <FeatureCard
              title="Pagos múltiples"
              description="Acepta diferentes métodos de pago: efectivo, tarjeta, y más."
              icon="💳"
          />
          <FeatureCard
              title="Reportes de ventas"
              description="Genera reportes detallados de tus ventas diarias, semanales y mensuales."
              icon="📊"
          />
        </div>
      </div>
    </section>

    <!-- Errors Section -->
    <section class="errors-section bg-gray-100 py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">Evita los errores que pueden perjudicar tus ventas</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ErrorCard
              title="Ventas sin stock"
              description="Evita vender productos que no tienes en inventario."
          />
          <ErrorCard
              title="Métodos de pago limitados"
              description="No pierdas ventas por no ofrecer más formas de pago."
          />
          <ErrorCard
              title="Errores en la facturación"
              description="Reduce al mínimo los errores al generar tickets o facturas."
          />
          <ErrorCard
              title="Pérdida de datos"
              description="Protege tu información con respaldos automáticos."
          />
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="value-section py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-20">JesTy TPV te ofrece todo lo que necesitas para aumentar tus ventas</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
              title="Mayor rapidez en ventas"
              description="Agiliza tu proceso de venta para atender más clientes en menos tiempo."
          />
          <ValueCard
              title="Control total de tu inventario"
              description="Evita sobreventas y mantén tu stock siempre actualizado."
          />
          <ValueCard
              title="Personalización de tickets"
              description="Adapta tus tickets de venta al diseño de tu empresa."
          />
          <ValueCard
              title="Acceso remoto"
              description="Monitorea tus ventas desde cualquier lugar y en cualquier dispositivo."
          />
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section bg-blue-500 text-white text-center py-20">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-6">¿Listo para transformar tu punto de venta?</h2>
        <button class="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Prueba JesTy TPV gratis
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
>