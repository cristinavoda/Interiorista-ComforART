<template>
  <div class="proyectos-bg">
<div class="projects-grid">
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img src="/proyecto1.jpg" alt="Proyecto 1" />
      </div>
      <div class="card-back">
        <h3>Rincon para descanso</h3>
        <p>El ambiente predominante en blanco induce la paz  ,el chaiselongue blanco con su forma ergonomica se amolda ala forma del cuerpo ,los cojines en conjunto con la alfombra  .</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img src="/proyecto2.jpg" alt="Proyecto 2" />
      </div>
      <div class="card-back">
        <h3>Oficina</h3>
        <p>Una oficina con una iluminacion versatil , zona de trabajo ,y una zona informal ,almacenamiento a medida </p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img src="/proyecto3.jpg" alt="Proyecto 3" />
      </div>
      <div class="card-back">
        <h3>Loft en Barcelona</h3>
        <p>Un proyecto de interiorismo que transforma un espacio tipo loft en un refugio sofisticado y varonil, pensado para aprovechar al máximo las vistas urbanas.
La paleta de colores se centra en marrones oscuros, grises intensos y negros mates, creando una atmósfera elegante y sobria. La combinación de metal negro y madera oscura texturizada aporta carácter industrial y calidez al mismo tiempo.
 </p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img src="/proyecto4.jpg" alt="Proyecto 4" />
      </div>
      <div class="card-back">
        <h3>Apartamento</h3>
        <p>Un proyecto centrado en la luz natural y la sensación de amplitud, ideal para espacios pequeños o con limitaciones de iluminación.
La elección de mobiliario blanco y paredes en verde claro potencia la claridad del ambiente y genera una atmósfera serena y fresca.

El diseño prioriza la funcionalidad con una distribución minimalista, sin recargar el espacio.</p>
      </div>
    </div>
  </div>
  
</div>
</div>
</template>

<style>
.proyectos-bg {
  background-image: url('/background-proyectos.jpg'); 
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(5px); 
  min-height: 100vh;
  padding: 2rem;
  color: white;
}
.projects-grid {
  display: grid;
  margin-top: 100px;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  perspective: 1000px;
}

.card {
  width: 100%;
  height: 300px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  overflow: hidden;
}

.card-front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-back {
  background: rgba(255, 255, 255, 0.9);
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
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