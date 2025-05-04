<template>
  <div class="hamburger-icon" :class="{'open': navbarOpen}" @click="toggleNavbar">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div><!-- Botón de hamburguesa para móviles -->
    <button @click="toggleSidebar" class="hamburger-btn">
      <span class="hamburger-icon">≣</span>
    </button>
</div><div>
    <!-- Botón de hamburguesa para móviles -->
    <button @click="toggleSidebar" class="hamburger-btn">
      <span class="hamburger-icon">≣</span>
    </button>

    <!-- Sidebar -->
    <div :class="['sidebar', { 'sidebar-open': isSidebarOpen }]">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/galeria">Galeria</router-link></li>
        <li><router-link to="/proyectos">Proyectos</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
        <li><router-link to="/presentacion">Presentacion</router-link></li>
      </ul>
    </div>

    <!-- Contenido principal -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style scoped>


.hamburger-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
}

.hamburger-icon {
  display: block;
  width: 30px;
  height: 3px;
  background-color: #ffff;
  transition: 0.3s;
}

.hamburger-btn:hover .hamburger-icon {
  background-color: #146654; /* Color cuando se pasa el ratón */
}
.hamburger-icon.open .line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-icon.open .line:nth-child(2) {
  opacity: 0;
}

.hamburger-icon.open .line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}


/* Estilos para el sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: -250px; /* Lo mantenemos fuera de la pantalla inicialmente */
  width: 250px;
  height: 100%;
  background-color: transparent;
  color: white;
  transition: 0.3s;
  padding: 20px;
  z-index: 50;
}

.sidebar-open {
  left: 0; /* Cuando se abre, el sidebar aparece */
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 15px 0;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-size: 28px;
  transition: color 0.3s;
}

.sidebar ul li a:hover {
  color: #327c6d;
}

/* Contenido principal */
.content {
  margin-left: 0;
  padding: 20px;
  transition: margin-left 0.3s;
}

.sidebar-open ~ .content {
  margin-left: 250px; /* Deja espacio para el sidebar */
}

/* Media Query para pantallas pequeñas */
@media screen and (max-width: 768px) {
  .hamburger-btn {
    display: block;
  }

  .sidebar {
    width: 100%;
  }

  .content {
    margin-left: 0;
  }

  .sidebar-open ~ .content {
    margin-left: 0;
  }
}
</style>
