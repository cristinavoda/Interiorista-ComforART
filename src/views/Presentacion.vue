<template>
  <div class="galeria-bg">
    <div class="presentacion">
  <div class="perfil">
    <img src="/foto-perfil.jpg" alt="Cristina Voda" class="foto-perfil" />
  </div>
  <div class="texto-presentacion">
    <h1>Soy Cristina Voda</h1>
    <p ref="subtitle" class="text-lg md:text-4xl text-gray-600 max-w-xl text-center -m-t-10"> Soy  interiorista y diseño interiores  modernas con alma, funcionalidad y estilo desde ComforART </p>
    
    <div class="boton-container">
  <router-link to="/proyectos" class="ver-proyectos-btn">Ver Proyectos</router-link>
</div>


  </div>
</div>

    
  </div>
  </template>


  <style>
  .galeria-bg {
  background-image: url('/background-presentacion.png'); /* asegúrate de que esté en /public/img */
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(5px); 
  min-height: 100vh;
  padding: 2rem;
  color: white;
}
.presentacion {
  display: block;
  height: 1300px;
  width: 1400px;
  align-items:center;
  justify-content: center;
  gap: 3rem;
  padding: 4rem 2rem;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  flex-wrap: wrap;
  color: #ccc;
}

.foto-perfil {
  width: 300px;
  height: 500px;
  margin-top: 50PX;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ccc;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
.boton-container {
  margin-top: auto; /* Empuja el botón hacia abajo */
  align-self: flex-start; /* O center si lo quieres centrado */
}



  .buton:hover {
  background-color: #848685;
}@media (max-width: 768px) {
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