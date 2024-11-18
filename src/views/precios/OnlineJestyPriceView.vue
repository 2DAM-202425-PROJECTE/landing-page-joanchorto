<template>
  <section class="pricing-section bg-blue-900 text-white py-16">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold mb-4">Precios adaptados a tus necesidades</h1>
      <p class="text-lg mb-6">
        Empieza con 14 días gratis, continúa con un plan al 50% de descuento durante 3 meses.
      </p>

      <!-- Tabs for business types -->
      <div class="flex justify-center mb-10 space-x-4">
        <button
            v-for="(type, index) in businessTypes"
            :key="index"
            @click="selectBusinessType(type)"
            :class="{
            'bg-blue-600': selectedType === type,
            'bg-blue-700': selectedType !== type,
          }"
            class="px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          {{ type }}
        </button>
      </div>

      <!-- Pricing Plans -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
            v-for="(plan, index) in currentPlans"
            :key="index"
            class="p-6 rounded-lg shadow-lg"
            :class="{
            'bg-purple-100 text-purple-900 border-2 border-purple-500': plan.name === 'Basic',
            'bg-gray-100 text-gray-800': plan.name === 'Deluxe',
            'bg-green-100 text-green-900': plan.name === 'Estándar',
          }"
        >
          <h2 class="text-xl font-bold mb-4">{{ plan.name }}</h2>
          <p class="text-4xl font-bold mb-4">{{ plan.price }} <span class="text-lg">/mes</span></p>
          <p class="text-sm line-through mb-2">{{ plan.originalPrice }}</p>
          <ul class="text-left space-y-3 mb-6">
            <li v-for="(feature, fIndex) in plan.features" :key="fIndex">{{ feature }}</li>
          </ul>
          <button
              :class="{
              'bg-gray-800 hover:bg-gray-700': plan.name === 'Deluxe',
              'bg-purple-500 hover:bg-purple-400': plan.name === 'Basic',
              'bg-green-600 hover:bg-green-500': plan.name === 'Estándar',
            }"
              class="text-white px-6 py-3 rounded-full transition-colors"
          >
            Empieza ahora
          </button>
        </div>
      </div>

      <a href="#" class="text-blue-200 mt-6 inline-block">Compara todas las funcionalidades →</a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Business types
const businessTypes = [
  'Empresas pequeñas',
  'Empresas medianas',
  'Autónomos',
];

// Pricing plans for each business type
const plans = {
  'Empresas pequeñas': [
    {
      name: 'Basic',
      price: '9.99',
      originalPrice: '15,00 €',

      features: ['✔ 1 usuario', '✔ Facturas y presupuestos', '✔ Contabilidad automatizada', '✔ TPV integrado','✔ Control de Inventario','✔ CRM para seguimiento de ventas'],
    },
    {
      name: 'Estándar',
      price: '14.99 €',
      originalPrice: '30,00 €',

      features: ['✔ 3 usuario', '✔ Facturas y presupuestos', '✔ Contabilidad automatizada', '✔ TPV integrado','✔ Control de Inventario','✔ CRM para seguimiento de ventas'],
    },
    {
      name: 'Deluxe',
      price: '19.99 €',
      originalPrice: '40,00 €',

      features: ['✔ 5 usuario', '✔ Facturas y presupuestos', '✔ Contabilidad automatizada', '✔ TPV integrado','✔ Control de Inventario','✔ CRM para seguimiento de ventas'],
    },
  ],
  'Empresas medianas': [
    {
      name: 'Basic',
      price: '29.99',
      originalPrice: '50.00 €',

      features: ['✔ 6 usuario', '✔ Facturas y presupuestos', '✔ Contabilidad automatizada', '✔ TPV integrado','✔ Control de Inventario','✔ CRM para seguimiento de ventas'],
    },
    {
      name: 'Estándar',
      price: '49.99 €',
      originalPrice: '90.00 €',

      features: ['✔ 10 usuario', '✔ Facturas y presupuestos', '✔ Contabilidad automatizada', '✔ TPV integrado','✔ Control de Inventario','✔ CRM para seguimiento de ventas'],
    },
    {
      name: 'Deluxe',
      price: '69.99 €',
      originalPrice: '110.00 €',

      features: ['✔ 15 usuario', '✔ Facturas y presupuestos', '✔ Contabilidad automatizada', '✔ TPV integrado','✔ Control de Inventario','✔ CRM para seguimiento de ventas'],
    },  ],
  'Autónomos': [
    {
      name: 'Basic',
      price: '9.99',
      originalPrice: '15,00 €',

      features: ['✔ 1 usuario', '✔ Facturas y presupuestos', '✔ Contabilidad automatizada', '✔ TPV integrado','✔ Control de Inventario','✔ CRM para seguimiento de ventas'],
    },
    {
      name: 'Estándar',
      price: '12.99 €',
      originalPrice: '20.00 €',

      features: ['✔ 2 usuario', '✔ Facturas y presupuestos', '✔ Contabilidad automatizada', '✔ TPV integrado','✔ Control de Inventario','✔ CRM para seguimiento de ventas'],
    },
    {
      name: 'Deluxe',
      price: '14.99 €',
      originalPrice: '25.00 €',

      features: ['✔ 3 usuario', '✔ Facturas y presupuestos', '✔ Contabilidad automatizada', '✔ TPV integrado','✔ Control de Inventario','✔ CRM para seguimiento de ventas'],
    },  ],

};

// Reactive variables
const selectedType = ref('Empresas pequeñas');
const currentPlans = ref(plans[selectedType.value]);

// Method to update selected business type
function selectBusinessType(type) {
  selectedType.value = type;
  currentPlans.value = plans[type];
}
</script>

<style scoped>
.pricing-section {
  background: linear-gradient(180deg, #0a2540 0%, #031a31 100%);
}
button {
  transition: background-color 0.3s ease;
}
</style>
