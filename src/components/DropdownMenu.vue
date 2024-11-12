<template>
  <div class="relative group">
    <button class="inline-flex items-center text-sm font-medium focus:outline-none">
      {{ title }}
      <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <!-- Dropdown -->
    <div class="absolute z-10 hidden group-hover:block bg-gray-900 rounded-md text-gray-200 border border-gray-50 shadow-md w-96 p-4">
      <div class="grid grid-cols-2 gap-4">
        <div v-for="item in items" :key="item.title">
          <a :href="item.link" class="block px-4 py-2 hover:bg-gray-200 hover:text-gray-900 rounded-md">
            <div class="flex items-center">
              <svg v-if="item.icon" :class="item.iconClass" xmlns="http://www.w3.org/2000/svg" :viewBox="item.viewBox" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path :d="item.iconPath" />
              </svg>
              <p class="ml-2">{{ item.title }}</p>
            </div>
            <p class="text-xs text-gray-400 mt-1">{{ item.description }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownMenu",
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Añadir estilos adicionales si es necesario */
</style>
