<template>
  <div class="value-card p-6 bg-white shadow-lg rounded-lg text-center">
    <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "ValueCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  }
};
</script>

<style scoped>
.value-card {
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
}
</style>
