import { createRouter, createWebHistory } from 'vue-router';
import Cursos from '../views/CursosView.vue';
import CursoDetalle from '../views/CursoDetalle.vue';
import Contacto from '../views/ContactoView.vue';
import Carrito from '../components/NavBar.vue'; // Asegúrate de que el nombre coincida exactamente
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/cursos', component: Cursos },
  { path: '/curso/:id', component: CursoDetalle },
  { path: '/contacto', component: Contacto },
  { path: '/carrito', component: Carrito },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
