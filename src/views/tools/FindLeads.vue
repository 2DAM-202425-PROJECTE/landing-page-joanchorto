<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Buscar Empresas</h1>
    <form @submit.prevent="onSearch" class="space-y-4 bg-white p-6 shadow-md rounded-md">
      <div>
        <label for="location" class="block text-sm font-medium">Población:</label>
        <input
            type="text"
            v-model="location"
            id="location"
            class="border border-gray-300 rounded-md w-full p-2"
            placeholder="Ej: Tarragona"
            required
        />
      </div>
      <div>
        <label for="sector" class="block text-sm font-medium">Sectores Empresariales:</label>
        <select
            v-model="selectedSectors"
            id="sector"
            class="border border-gray-300 rounded-md w-full p-2"
            multiple
        >
          <option value="travel_agency">Agencias de Viajes</option>
          <option value="restaurant">Restaurantes</option>
          <option value="cafe">Cafés</option>
          <option value="shop">Tiendas</option>
          <option value="boutique">Boutiques</option>
          <option value="marketplace">Mercados</option>
          <option value="office">Oficinas</option>
          <option value="consulting">Consultoría</option>
          <option value="coworking_space">Espacios de Coworking</option>
          <option value="school">Academias</option>
          <option value="college">Colegios</option>
          <option value="university">Universidades</option>
          <option value="fitness_centre">Centros de Fitness</option>
          <option value="spa">Spas</option>
          <option value="ngo">ONGs</option>
          <option value="conference_centre">Centros de Conferencias</option>
          <option value="event_space">Espacios para Eventos</option>
          <option value="studio">Estudios Creativos</option>
          <option value="workshop">Talleres</option>
        </select>
      </div>
      <div>
        <label for="radius" class="block text-sm font-medium">Radio de búsqueda (metros):</label>
        <input
            type="number"
            v-model="radius"
            id="radius"
            class="border border-gray-300 rounded-md w-full p-2"
            placeholder="Ej: 5000"
            min="100"
            max="50000"
            required
        />
      </div>

      <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Buscar
      </button>
    </form>

    <table class="mt-6 w-full bg-white shadow-md rounded-md">
      <thead>
      <tr class="bg-gray-200">
        <th class="text-left p-2">Nombre</th>
        <th class="text-left p-2">Dirección</th>
        <th class="text-left p-2">Teléfono</th>
        <th class="text-left p-2">Rating</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="results.length === 0" class="text-center text-gray-600">
        <td colspan="4">No se encontraron empresas que coincidan con los filtros seleccionados.</td>
      </tr>
      <tr v-for="place in results" :key="place.place_id" class="border-t">
        <td class="p-2">{{ place.name || 'Sin nombre' }}</td>
        <td class="p-2">{{ place.vicinity || 'N/A' }}</td>
        <td class="p-2">{{ place.formatted_phone_number || 'N/A' }}</td>
        <td class="p-2">{{ place.rating || 'N/A' }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      selectedSectors: [],
      radius: 5000,
      results: [],
      apiKey: 'AIzaSyDc3x7lL9GCHiXbprfrcyEQ7Kd2bkgCu6E',
    };
  },
  methods: {
    async onSearch() {
      try {
        // Obtener coordenadas de la ubicación con Places API Geocoding
        const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(this.location)}&key=${this.apiKey}`;
        const geocodeResponse = await fetch(geocodeUrl);
        const geocodeData = await geocodeResponse.json();

        if (!geocodeData.results || geocodeData.results.length === 0) {
          alert('No se encontraron resultados para la población especificada.');
          return;
        }

        const { lat, lng } = geocodeData.results[0].geometry.location;

        // Buscar empresas con Places API Nearby Search
        const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${this.radius}&type=${this.selectedSectors.join('|')}&key=${this.apiKey}`;
        const placesResponse = await fetch(placesUrl);
        const placesData = await placesResponse.json();

        if (!placesData.results || placesData.results.length === 0) {
          this.results = [];
        } else {
          this.results = placesData.results;
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Ocurrió un error al buscar empresas.');
      }
    },
  },
};
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí */
</style>
