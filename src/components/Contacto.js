import React from 'react';
import imagen from '../img/contact.png';

export const Contacto = () => {

  return (
    <div className='page '  >
        <h1 className="heading">Contactanos</h1>
      <div className='contacto'>
        <form className='formumalario' action="mailto:bocademanjol11@gmail.com">
          <input type='text' placeholder='Nombre'></input>
          <input type='text' placeholder='Apellido'></input>
          <input type='email' placeholder='Email'></input>
          <textarea placeholder='Mensaje...'></textarea>
          <input type='submit' value="enviar"></input>
        </form>
        <div>
          <img src={imagen} alt="" className='imgContacto animated fadeInLeft' />
        </div>
      </div>


    </div>
  )
}
