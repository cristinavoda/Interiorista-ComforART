<template>
  <div class ="contact-bg">

    <div class="contact-container">

      <!-- Parte izquierda: Teléfono, dirección, etc. -->
      <div class="contact-info">
        <h2>Contacto</h2>
        <p><strong>Teléfono:</strong> +34 634608218</p>
        <p><strong>Email:</strong> contacto@comforart.com</p>
        <p><strong>Dirección:</strong> C/ Estilo Nº7, Lleida</p>
      </div>

      <!-- Parte derecha: Formulario tipo postal -->
      <div class="contact-form">
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Email" />
        <textarea rows="3" placeholder="Escribe tu mensaje aquí..."></textarea>
        <button>Enviar</button>
      </div>
    </div>
    </div>
  
</template>


<style>
.contact-bg
 {
  margin-top: 350px;
  background-image: url('/background-contacto1.jpg'); 
  height: 1000px;
  margin-top: 20px;
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(5px);
  padding: 2rem;
}

.contact-container {
  display: grid;
  margin-top: 210px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(6, auto);
  gap: 1rem;
  max-width: 1100px;
  margin: 1 auto;
  background-color: rgba(255, 255, 255, 0.062); /* efecto cristal o papel */
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(19px);
  border: 1px solid rgba(255, 255, 255, 0.3);

}

.contact-info {
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1rem;
  font-weight: 500;
}

.contact-form {
  display: grid;
  grid-template-rows: repeat(6, auto);
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.062); /* efecto cristal o papel */
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(19px);
  border: 1px solid rgba(255, 255, 255, 0.3);

}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.7rem;
  border: none;
  border-bottom: 2px solid #ccc;
  background: transparent;
  font-size: 1rem;
}

.contact-form button {
  grid-row: 6;
  justify-self: end;
  padding: 0.7rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  
  color: #000;
  font-weight: bold;border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  color: #000;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
.contact-form button:hover {
  background: rgba(167, 163, 163, 0.5);
  transform: scale(1.03);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

</style>