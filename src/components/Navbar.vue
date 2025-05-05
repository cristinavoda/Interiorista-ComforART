<template>
  <div ref="sidebarContainer">
    
     <button @click="toggleSidebar" class="hamburger-btn">
      <span class="hamburger-icon">≣</span>
    </button>

   
    <div :class="['sidebar', { 'sidebar-open': isSidebarOpen }]">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/galeria">Galeria</router-link></li>
        <li><router-link to="/proyectos">Proyectos</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
        <li><router-link to="/presentacion">Presentacion</router-link></li>
      </ul>
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
    handleClickOutside(event) {
      const sidebar = this.$refs.sidebarContainer;
      if (sidebar && !sidebar.contains(event.target)) {
        this.isSidebarOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
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
  margin-top: 3px;
  size: 80px;
  width: 90px;
  height: 30px;
  background: linear-gradient(to bottom, #16141b, #e5eceb);
 
  transition: 0.3s;
}

.hamburger-btn:hover .hamburger-icon {
  background-color: #146654; 
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



.sidebar {
  position: fixed;
  top: 0;
  left: -250px; 
  width: 250px;
  height: 100%;
  background-color: rgb(156, 147, 147);
  height:fit-content;
  color: white;
  transition: 0.3s;
  padding: 50px;
  z-index: 50;
}

.sidebar-open {
  left: 0; 
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


.content {
  margin-left: 0;
  padding: 20px;
  transition: margin-left 0.3s;
}

.sidebar-open ~ .content {
  margin-left: 250px; 
}


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
