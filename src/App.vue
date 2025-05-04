<template>
<div id="app">
    <Navbar />
    <transition name="fade"  mode="out-in">
    <router-view />
  </transition>
  
  <main class="video-wrapper">
  <div id="background-container">
    
    <video
      autoplay
      loop
      muted
      id="bg-video"
     
    >
      <source src="/background.mp4" type="video/mp4" />
    </video>
 </div>
</main>
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
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: 10;
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.glass-button {
  padding: 12px 30px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);  
  border: 1px solid rgba(255, 255, 255, 0.3);  
  backdrop-filter: blur(8px);  
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}


.glass-button:hover {
  background: rgba(255, 255, 255, 0.2);  
  transform: scale(1.05);  
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
#bg-video {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* Contenido sobre el video */
.video-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 5rem;
}

/* Botón elegante */
.cta-button {
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6px);
  border: none;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;
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