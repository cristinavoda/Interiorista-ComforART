import { createApp } from 'vue';  // Importar createApp desde vue
import App from './App.vue';  // Importar tu componente raíz
import router from './router';  // Importar el router, si lo tienes configurado

createApp(App)  // Usar createApp para crear la aplicación Vue
  .use(router)  // Registrar el router si lo usas
  .mount('#app');  // Montar la app en el elemento con id "app"
