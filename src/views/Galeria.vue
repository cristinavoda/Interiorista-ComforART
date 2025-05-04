<template>
   <div class="galeria-bg">

  <div class="galeria-container">
   
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

<style >
.galeria-bg {
  background-image: url('/background-galeria.png');
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(5px); 
  width: 100hw;
  min-height: 100vh;
  padding: 1rem;
  
}

.galeria-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  padding-top: 10px; 
  padding-left: 20px;
  box-sizing: border-box;
}
  

  .galeria-botones {
    display: flex;
    margin-top: 80px;
  flex-direction: column;
    margin: 1rem 0rem  o ;
    width: 90%;
    padding: 1rem;
    gap: 1rem;
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
  .galeria-container {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

 }
</style>
