<template>
  <div class="feature-card p-6 bg-white shadow-lg rounded-lg text-center">
    <div class="text-5xl mb-4">{{ icon }}</div>
    <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    }
  }
};
</script>

<style scoped>
.feature-card {
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}
</style>
