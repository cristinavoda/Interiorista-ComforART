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
        <p>Descripción breve y atractiva.</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img src="/proyecto3.jpg" alt="Proyecto 3" />
      </div>
      <div class="card-back">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción breve y atractiva.</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img src="/proyecto4.jpg" alt="Proyecto 4" />
      </div>
      <div class="card-back">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción breve y atractiva.</p>
      </div>
    </div>
  </div>
  <!-- Repite para las otras 3 cards -->
</div>
</div>
</template>

<style>
.proyectos-bg {
  background-image: url('/background-proyectos.jpg'); /* asegúrate de que esté en /public/img */
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(5px); /* efecto tipo cristal */
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