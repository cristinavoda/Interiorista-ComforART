<template>
  <div class="home-wrapper">
    <div class="glass-box">
      <h1>Bienvenido a ComforART</h1>
      <p>Tu estudio de interiorismo donde el confort y el arte se unen</p>
    </div>
  </div>
  <div class="welcome-container">
  <div class="hover-area"> 
    <h1 class="glass-title">BIENVENIDO </h1>
  </div>
</div>

    <div class="min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 ref="glass-title" class="text-4xl md:text-6xl font-bold mt-4 text-white-900 -m-t-30" >
        Espacios de Diseño
      </h1>
      <p ref="subtitle" class="text-lg md:text-3xl text-white-600 max-w-xl text-center -m-t-10">
        Interiorismo elegante y minimalista. Espacios con alma.
        <router-link to="/contacto" class="boton-contacto">
  Contacto
</router-link>

      </p>
    </div>
   

  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { gsap } from 'gsap'
  
  const title = ref(null)
  const subtitle = ref(null)
  
  onMounted(() => {
    gsap.from(title.value, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: 'power2.out'
    })
  
    gsap.from(subtitle.value, {
      opacity: 0,
      y: 30,
      delay: 0.6,
      duration: 1.2,
      ease: 'power2.out'
    })
  })
  </script>
  <style>
 
.home-wrapper {
  position: relative;
  z-index: 2;
  margin-top: -220px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
}

.glass-box {
  background: rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  margin-top: 90px;
  padding: 2rem 3rem;
  text-align: center;
  color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}
  .welcome-container {
    display: flex;
    position: fixed;
    top: -100px;
    height: 400px;
    background: url('fondo.jpg') center/cover no-repeat;
    display: flex;
    align-items: left;
    justify-content: center;
  }
  
  .hover-area {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .glass-title {
    position: absolute;
    top: 99%;
    left: 80%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(115, 122, 138, 0.377);
    background: linear-gradient(145deg, #b7cac8, #156e6e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px rgba(9, 99, 99, 0.5),
                 0 0 20px rgba(8, 3, 3, 0.3);
    opacity: 0;
    transition: opacity 0.6s ease;
    pointer-events: none;
  }
  
  .hover-area:hover .glass-title {
    opacity: 1;
  }
  .boton-contacto {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: x-large;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
}

.boton-contacto:hover {
  background-color: #6d7271;
  box-shadow: 0 4px 12px rgba(0, 128, 96, 0.3);
}

  </style>