import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Presentacion from '../views/Presentacion.vue';
import Proyectos from '../views/Proyectos.vue';
import Galeria from '../views/Galeria.vue';
import Contacto from '../views/Contacto.vue';

// Definir las rutas
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/presentacion', name: 'Presentación', component: Presentacion },
  { path: '/proyectos', name: 'Proyectos', component: Proyectos },
  { path: '/galeria', name: 'Galería', component: Galeria },
  { path: '/contacto', name: 'Contacto', component: Contacto },
];

// Crear el enrutador
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Exportar el enrutador
export default router;
