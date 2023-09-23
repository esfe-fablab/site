import React from 'react'

const Inicio = () => {
  return (
    <main className='container'>
      <header class="main-header">
        <div class="header-content">
          <img src="/img/logo/fablab-logo.svg" alt="logo-fablab" />
          <h1> <b>FAB</b>LAB</h1>
          <span>ESCUELA SUPERIOR FRANCISCANA <br /> ESPECIALIZADA / AGAPE</span>
        </div>

        <p>
          Descubre un laboratorio de <b>Innovación</b> e <b>investigación</b> que impulsa la
          creatividad y el aprendizaje
        </p>

      </header>

      <main class="container">
        <section class="section-contain">

          <article class="card-home">
            <h2>Diseña tus ideas</h2>
            <span></span>
            <p>Diseña las mejores ideas y llévalas a un objeto Físico 3D, completamente creado por ti.</p>

            <div>
              <img src="./img/util/disenio-3d.jpg" alt="diseño 3D" />
            </div>
          </article>

          <article class="card-home card-home-inverse">
            <h2>Crea un proyecto</h2>
            <span></span>
            <p>Convierte esos diseños en un Proyecto funcional con Arduino</p>

            <div>
              <img src="./img/util/robot-ultrasonico.jpg" alt="Robot ultrasonico esfe agape" />
            </div>
          </article>
        </section>



      </main>
    </main>
  )
}

export default Inicio