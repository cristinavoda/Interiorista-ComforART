<template>
  <div class="galeria-bg">

 <div class="galeria-container">
  
   <div class="galeria-botones w-1/4 p-6 space-y-4">
     <button
       v-for="(foto, index) in fotos"
       :key="index"
       @click="imagenActual = index"
       :class="['boton', index === imagenActual ? 'activo' : '']"
     >
       {{ foto.titulo }}
     </button>
   </div>

    <div class="galeria-imagen  w-1/2 flex items-center justify-center overflow-hidden relative">
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
.galeria-bg { background-image: url('/background-galeria.png'); 
 background-size: cover;
 background-position: center;
 backdrop-filter: blur(5px); 
 padding: 2rem;
 color: white;
 
 
}

.galeria-container {
 display: flex;
 flex-direction: row;
 padding-top: 10px; 
 margin-left: 10px;
 padding-left: -300px;
 box-sizing: border-box;
}
 

 .galeria-botones {
   display: flex;
   margin-top: 80px;
   flex-direction: column;
   margin: 1rem   o ;
   width: fit fit-content;
   padding: 0rem;
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
 width: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 2rem;
}

.galeria-imagen img {

 border-radius: 15px;
 object-fit: cover;
}
@media (max-width: 768px) {
  .galeria-botones {
    align-items: center;
  }

  .boton {
    width: 100%;
    text-align: center;
  }
}
</style>