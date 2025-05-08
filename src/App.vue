<template>
<div id="app">
    <Navbar />
    <transition name="fade"  mode="out-in">
    <router-view />
  </transition>
  
  
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
  
  border-radius: 50px;
  background: rgba(141, 66, 66, 0.1);  
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

#background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1; 
}


#bg-video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center center; 
}

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
  background: rgba(255, 255, 255, 0.2); 
  border: 2px solid rgba(255, 255, 255, 0.5); 
  border-radius: 8px; 
  padding: 12px 24px;
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.button:hover {
  background: rgba(255, 255, 255, 0.4); 
  transform: scale(1.1);
}



</style>