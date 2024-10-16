import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import BlogView from "@/views/BlogView.vue";
import JctagencyView from "@/views/JctagencyView.vue";
import BillingView from "@/views/funcionalidades/BillingView.vue";
import ClientsView from "@/views/funcionalidades/ClientsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ModificacionView',
      component: HomeView
    },
    {
      path: '/software-facturacion-online',
        name: 'SoftwareFacturacionOnlineView',
        component: BillingView
    },
      //accounting
    {
      path: '/software-contabilidad-online',
        name: 'SoftwareContabilidadOnlineView',
        component: () => import('@/views/funcionalidades/AccountingView.vue')
    },
      //crm
    {
      path: '/software-crm-online',
        name: 'SoftwareCrmOnlineView',
        component: () => import('@/views/funcionalidades/CRMView.vue')

    },
        //pos
        {
          path: '/software-pos-online',
            name: 'SoftwarePosOnlineView',
            component: () => import('@/views/funcionalidades/TPVView.vue')
        },
            //inventory
            {
              path: '/software-inventory-online',
                name: 'SoftwareInventoryOnlineView',
                component: () => import('@/views/funcionalidades/InventaryView.vue')
            },
      //clientes
    {
      path: '/software-clientes-online',
        name: 'ClientesView',
        component: ClientsView
    },
    {
      path:'/jctagency',
        name:'JctagencyView',
        component: JctagencyView
    },
    {
      path:'/online-jesty-price',
        name:'OnlineJestyPriceView',
        component: () => import('@/views/precios/OnlineJestyPriceView.vue')
    },
    {
      path:'/physical-jesty-price',
        name:'PhysicalJestyPriceView',
        component: () => import('@/views/precios/PhysicalJestyPriceView.vue')
    },
    {
      path:'/contact',
        name:'ContactView',
        component: ContactView
    }


  ]
})

export default router
