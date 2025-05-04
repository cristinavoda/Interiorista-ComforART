<template>
  <nav class="navbar">
    <div class="navbar-inner">
     
      
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/presentacion" class="nav-link">Presentación</router-link>
        <router-link to="/proyectos" class="nav-link">Proyectos</router-link>
        <router-link to="/galeria" class="nav-link">Galería</router-link>
        <router-link to="/contacto" class="nav-link">Contacto</router-link>
        <button class="menu-toggle" @click="toggleMenu">≡</button>
      </div>
     
      
  
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuVisible = ref(false);

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(235, 231, 231, 0.993);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 10px 10px 30px rgba(10, 102, 67, 0.1);
  font-family: 'Outfit', sans-serif;
  z-index: 50;
}

.navbar-inner {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.nav-link {
  text-decoration: none;
  color: rgba(16, 47, 48, 0.986);
  body {
  font-family: 'Outfit', sans-serif;
}

  font-size: x-large;
  transition: color 0.3s ease;
  padding: 10px 0px 10px;
  gap: 2rem;
  
}

.nav-link:hover {
  color: #22769c;
}

.menu-toggle {
  display: none;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: rgba(4, 46, 48, 0.986);
}

/* Estilos para el menú en dispositivos móviles */
@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    gap: 10px;
  }

  .menu-toggle {
    display: block;
  }

  .menu-visible {
    display: flex;
  }
}
</style>

