import { createRouter, createWebHistory } from "vue-router";
import Get from "./../views/Get.vue";
import Post from "./../views/Post.vue";

//historia web y las rutas
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Ruta principal que muestra la lista de clientes
    { path: "/get", component: Get },
    // Ruta para crear un nuevo cliente
    { path: "/post", component: Post },
  ],
});

export default router;
