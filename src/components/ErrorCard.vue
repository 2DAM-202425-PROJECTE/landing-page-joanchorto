<template>
  <div class="error-card p-6 bg-white shadow-lg rounded-lg text-center">
    <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "ErrorCard",
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
.error-card {
  transition: transform 0.3s ease;
}

.error-card:hover {
  transform: translateY(-10px);
}
</style>
