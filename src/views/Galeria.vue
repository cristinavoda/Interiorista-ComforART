<template>
   <div class="galeria-bg">
  <div class="galeria-container">
    <div class="galeria-bg">
     
    </div>
    <!-- Botones -->
    <div class="galeria-botones">
      <button
        v-for="(foto, index) in fotos"
        :key="index"
        @click="imagenActual = index"
        :class="['boton', index === imagenActual ? 'activo' : '']"
      >
        {{ foto.titulo }}
      </button>
    </div>

    <!-- Imagen -->
    <div class="galeria-imagen">
      <img
        :src="fotos[imagenActual].src"
        :alt="fotos[imagenActual].titulo"
      />
    </div>
  </div></div>

</template>

<script>
export default {
  data() {
    return {
      imagenActual: 0,
      fotos: [
        { titulo: 'Escalera cristal', src: '/galeria/escalera-cristal.jpg' },
        { titulo: 'Cocina moderna verde', src: '/galeria/cocina-moderna-verde.jpg' },
        { titulo: 'Comedor', src: '/galeria/comedor-verde.jpg' },
        { titulo: 'Salón exterior', src: '/galeria/salon-exterior.jpg' },
        { titulo: 'Bañera', src: '/galeria/bañera-vistas.jpg' },
        { titulo: 'Dormitorio', src: '/galeria/habitacion-matrimonio-verde.jpg' },
        { titulo: 'Modular', src: '/galeria/modular.jpg' },
      ],
    };
  },
  mounted() {
    this.startCarrusel();
  },
  methods: {
    startCarrusel() {
      setInterval(() => {
        this.imagenActual = (this.imagenActual + 1) % this.fotos.length;
      }, 4000);
    },
  },
};
</script>

<style scoped> 
.galeria-bg {
  background-image: url('/background-galeria.png'); /* asegúrate de que esté en /public/img */
  background-size: cover;
  background-position: center;
  height: fit-content;
  width: 100%;
  padding: 2rem;
  
}
.galeria-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  padding-top: 10px; /* para que no se solape con navbar fijo */
  box-sizing: border-box;
}

.galeria-botones {
  margin-top: 210px;
  margin-left: -140px;
  width: 30%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color:transparent;
  border-radius: 12px;
  padding-top: 1px;
}

.boton {
  padding: 10px 15px;
  border: 2px solid #caecda;
  border-radius: 8px;
  background-color: rgba(211, 216, 215, 0.719);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.boton:hover {
  background-color: #e0e0e0;
}

.boton.activo {
  
  color: rgb(23, 80, 61);
  border-color: #146654;
  box-shadow: 10px 10px 10px rgba(52, 199, 177, 0.4);
}

.galeria-imagen {
  margin-top: 60px;
  width: 160%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.galeria-imagen img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
}
@media (max-width: 768px) {
  .postal-card {
    flex-direction: column;
    aspect-ratio: auto;
    padding: 1rem;
  }

  .postal-left, .postal-right {
    width: 100%;
  }
}

</style>
