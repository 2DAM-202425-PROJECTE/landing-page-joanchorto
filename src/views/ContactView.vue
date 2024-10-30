<script>
import emailjs from 'emailjs-com';

export default {
  components: {NewsletterPopip},
  data() {
    return {
      isFormSubmitted: false,
      submitedError: false,


      formFields: {
        nombre: '',
        email: '',
        mensaje: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      emailjs.sendForm('service_uaggcy8', 'template_yav8r89', this.$el.querySelector('form'), 'PrtHsOGCYBrChfJU3')
          .then((result) => {
            console.log(result.text);
            this.isFormSubmitted = true;
            this.clearFormFields();
          })
          .catch((error) => {
            console.log(error.text);
            this.isFormSubmitted = false;
            this.submitedError = true;
          });
    },
    clearFormFields() {
      this.formFields = {
        nombre: '',
        email: '',
        mensaje: ''
      };
    }
  }
};


import {ref} from 'vue';
import NewsletterPopip from "@/components/NewsletterPopip.vue";

const openIndex = ref(null);
const showPopup = ref(true);


function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<template>
  <head>
    <title>JesTy - Contacto</title>
    <meta name="description" content="Contacta con nosotros para cualquier consulta. Dejanos tus datos para empezar a mejorar el rendiminento de tu empresa">
    <meta name="keywords" content="contacto, ventas, consultas, información, contacto comercial">
    <link rel="canonical" href="https://jesty.com/contacto">
    <meta property="og:title" content="JesTy - Contacto">
    <meta property="og:description" content="Contacta con nosotros para cualquier consulta. Dejanos tus datos para empezar a mejorar el rendiminento de tu empresa">
    <meta property="og:url" content="https://jesty.com/contacto">
    <meta property="og:image" content="https://jesty.com/contacto.jpg">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_ES">
    <meta property="og:site_name" content="JesTy">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="JesTy - Contacto">
    <meta name="twitter:description" content="Contacta con nosotros para cualquier consulta. Dejanos tus datos para empezar a mejorar el rendiminento de tu empresa">
    <meta name="twitter:image" content="https://jesty.com/contacto.jpg">
  </head>
  <NewsletterPopip v-if="showPopup" />
  <div class=" flex bg-gray-100 py-40">
<div data-aos="flip-left" class="w-1/2">
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contacto de ventas</h2>
    <p class="mt-2 text-lg leading-8 text-gray-600">Dejanos tus datos para empezar a mejorar el rendiminento de tu empresa</p>
  </div>
  <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
        <div class="mt-2.5">
          <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>
        <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
        <div class="mt-2.5">
          <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
        <div class="mt-2.5">
          <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div class="mt-2.5">
          <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
        <div class="relative mt-2.5">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <label for="country" class="sr-only">Country</label>
            <select id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm">
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
            <svg class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </div>
          <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
        <div class="mt-2.5">
          <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
      <div class="flex gap-x-4 sm:col-span-2">
        <div class="flex h-6 items-center">
          <!-- Enabled: "bg-blue-600", Not Enabled: "bg-gray-200" -->
          <button type="button" class="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
            <span class="sr-only">Agree to policies</span>
            <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" -->
            <span aria-hidden="true" class="h-4 w-4 translate-x-0 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
          </button>
        </div>
        <label class="text-sm leading-6 text-gray-600" id="switch-1-label">
          By selecting this, you agree to our
          <a href="#" class="font-semibold text-blue-600">privacy&nbsp;policy</a>.
        </label>
      </div>
    </div>
    <div class="mt-10">
      <button type="submit" class="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Let's talk</button>
    </div>
  </form>
</div>
<div data-aos="flip-right" class="w-1/2">
  <div class="mx-auto max-w-2xl space-y-10 text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contacta</h2>
    <p class="mt-2 text-lg leading-8 text-gray-600">Contacta con nosotros para cualquier consulta.</p>
    <ul class="text-start ml-20 space-y-6 text-gray-900">
      <li>Phone: 123-456-789</li>
      <li>Email: joan@jctagency.com </li>
      <li>Address: 1234 Main St, Barcelona, Spain</li>
    </ul>
  </div>
</div>



  </div>

</template>

<style scoped>

</style>