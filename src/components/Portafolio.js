import React from 'react';
import { trabajos } from '../datos/trabajos';
import { Link } from 'react-router-dom';

export const Portafolio = () => {
  return (
    <div className='page '>
      <h1 className="heading">Portafolio</h1>

      <div className='trabajos '>
        {
          trabajos.map(trabajo => {
            return(
              <article className='trabajo-item animated fadeInLeft' key={trabajo.id}>
                <div className='mask'>
                  <img src={"/images/"+trabajo.id+".jpg"} alt='trabajos' />
                </div>
                <span>{trabajo.categoria}</span>
                {/* <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link> </h2> */}
                <h2><Link to={trabajo.url}>{trabajo.nombre}</Link> </h2>
                <h3>{trabajo.tecnologias}</h3>
              </article>
            );
          })        
        }
      </div>

    </div>
  )
}
