<template>
<div id="app">
    <Navbar />
    <transition name="fade"  mode="out-in">
    <router-view />
  </transition>
  
  <div class="Navbar-wrapper" @click.self="closeNavbar">
    
  
    <div class="toggle" @click="handleClick" >
      &#9776;
    </div>
  </div>
  
  
  
  <div id="background-container">
    <!-- Video de fondo -->
    <video
      autoplay
      loop
      muted
      id="bg-video"
     
    >
      <source src="/background.mp4" type="video/mp4" />
    </video>
 </div>

 <div class="hover-group absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-center text-white px-4"
>

  <section class="bg-green-100 py-16 text-left mt-20">
  
</section>

  

</div>

    
    
  </div>
     
      
    
 </template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import Navbar from './components/Navbar.vue'
const headline = ref(null)
const button = ref(null)

onMounted(() => {
  gsap.from(headline.value, {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  })

  gsap.from(button.value, {
    y: 50,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    ease: 'power2.out'
  })
})


</script>

<style> 

.h1 {
  margin-top: -80px;
  color: rgb(5, 78, 78);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.glass-title {
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background: linear-gradient(145deg, #19524c, #09614e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 5px 10px rgba(25, 156, 128, 0.5),
               0 0 20px rgba(255, 255, 255, 0.3);
}
/* Reset general (como lo hace Tailwind) */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Borde de cristal */
.glass-button {
  padding: 12px 30px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);  /* Fondo semitransparente */
  border: 1px solid rgba(255, 255, 255, 0.3);  /* Borde suave */
  backdrop-filter: blur(8px);  /* Efecto cristal difuso */
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

/* Efecto hover */
.glass-button:hover {
  background: rgba(255, 255, 255, 0.2);  /* Fondo más transparente */
  transform: scale(1.05);  /* Escalado leve en hover */
}


.h2 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: xx-large;
top:0cap
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.hover-group:hover .fade-on-hover {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-on-hover {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.hover-group {
  position: absolute;
  bottom: 2rem; /* o el valor que necesites */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 10;
}

#bg-video {
  position: fixed;
  top:15%;
  bottom:15% ;
  left: 0;
  width: 100%;
  height: 70%;
  object-fit:var();
  z-index: -1;
}

/* TOGGLE BAR */
.toggle {
  position: fixed;
  top: 20px;
  right: 40px;
  font-size: 62px;
  font-weight: bolder;
  color: white;
  cursor: pointer;
  z-index: 2;
}
.button {
  background: rgba(255, 255, 255, 0.2); /* Fondo translúcido */
  border: 2px solid rgba(255, 255, 255, 0.5); /* Borde similar al cristal */
  border-radius: 8px; /* Bordes redondeados */
  padding: 12px 24px;
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.button:hover {
  background: rgba(255, 255, 255, 0.4); /* Aumentar la opacidad en hover */
  transform: scale(1.1); /* Aumentar el tamaño del botón al pasar el ratón */
}

</style>