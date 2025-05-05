<template>
  <div class="galeria-bg">
    <div class="presentacion">
  <div class="perfil">
    <img src="/foto-perfil.jpg" alt="Cristina Voda" class="foto-perfil" />
  </div>
  <div class="texto-presentacion">
    <h1>Soy Cristina Voda</h1>
    <p 
  ref="subtitle" 
  class="text-base sm:text-lg md:text-4xl text-gray-700 max-w-3xl mx-auto text-center px-4 leading-relaxed"
>
  Soy interiorista y diseño interiores modernas con alma, funcionalidad y estilo desde ComforART. 
  Con empatía y escucha activa, capto la esencia de cada persona para transformar sus ideas y necesidades 
  en ambientes que reflejen su personalidad. Me apasiona el diseño moderno, armónico y elegante, 
  y pongo atención a cada detalle para que el resultado sea tanto estético como funcional.

  Aunque mi recorrido profesional está empezando, tengo una gran motivación por crear proyectos únicos, 
  eficientes y llenos de belleza. Me considero resolutiva, inventiva y comprometida con lograr espacios 
  que inspiren bienestar y comodidad.
</p>

    
    <div class="boton-container">
  <router-link to="/proyectos" class="ver-proyectos-btn">Ver Proyectos</router-link>
</div>


  </div>
</div>

    
  </div>
  </template>


  <style>
  .galeria-bg {
    margin-top: 350px;
  background-image: url('/background-presentacion.jpg'); 
  margin-top: 20px;
  width: 100hw;
  min-height: 260vh;
  padding: 1rem;
  
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(5px);
  padding: 2rem;
}
.presentacion {
  display: block;
  height: 1300px;
  width: 1400px;
  align-items:center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem 1rem;
  background-color: rgba(5, 3, 3, 0.6);
  border-radius: 16px;
  backdrop-filter: blur(3px);
  flex-wrap: wrap;
  
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
.subtitle { 
  font-family: italic;
  justify-content:space-around;
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