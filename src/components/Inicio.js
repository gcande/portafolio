import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>Hola, soy <strong>Gabriel</strong> y soy desarrollador Web, ofrezco mis servicios como <strong>desarrollador de 
        software</strong> con las últimas tecnologías del mercado.
      </h1>
      <h2>
        Si necesitas un sitio web o una aplicación que funcione correctamente en cualquier dispositivo
        móvil, tablet o computadora puedes <Link to="/contacto">contactarme</Link> para obtener más información sobre mi
        trabajo profesional.
      </h2> 

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo</p>
      </section>

    </div>
  )
}
