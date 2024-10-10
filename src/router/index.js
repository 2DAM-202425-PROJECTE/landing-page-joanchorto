import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import BlogView from "@/views/BlogView.vue";
import JctagencyView from "@/views/JctagencyView.vue";
import HomeViewV2 from "@/views/HomeViewV2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'ModificacionView',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'HomeViewV2',
      component: HomeViewV2
    },
    // {
    //   path: '/jctagency',
    //   name: 'JCT Agency',
    //   component: JctagencyView
    // },
    // {
    //   path: '/blog',
    //   name: 'BlogView',
    //   component: BlogView
    // },
    // {
    //   path: '/contact',
    //   name: 'ContactView',
    //   component: ContactView
    // },


  ]
})

export default router
