import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='inicio'>
      <h1>
        Bienvenido, mi nombre es Emiliano Olivera y soy desarrollador web fullstack. Te ayudo a crear un sitio web a la medida de tus necesidades y así poder catapultar tu negocio en internet. <Link to='/contacto'>Contactame</Link>  
      </h1>
 
      <h2>Algunos de mis proyectos</h2>
    
    <div>

        <ListadoTrabajos limite='2'/>
    </div>

  

    </div>
  )
}
