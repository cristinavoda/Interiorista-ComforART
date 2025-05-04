<template>
  <nav class="navbar">
    <div class="navbar-container">
     
      
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
  background-color: white;
  box-shadow: 6px 12px 6px rgba(102, 105, 105, 0.1);
  position:absolute;
  top: 0;
  margin-right:  20px;
  width:100%;
  z-index: 50;
  padding: 20px 30px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: xx-large;
  
}

.navbar-container {
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100% ;
  gap :2rem;
  margin-left: -50px;

}



.nav-link {
  text-decoration: none;
  color: rgba(16, 47, 48, 0.986);
  
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

