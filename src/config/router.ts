import { createRouter, createWebHistory } from "vue-router";
import ClientList from "./../components/Post.vue";

//historia web y las rutas
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Ruta principal que muestra la lista de clientes
    { path: "/", component: ClientList },
  ],
});

export default router;
