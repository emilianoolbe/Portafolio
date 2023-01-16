import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav'>
        <ul>
            <li>
              <NavLink to='/'  className={({isActive}) => isActive ? 'seleccionado' : ''} >Inicio</NavLink>
            </li>
            <li>
              <NavLink to='/servicios' className={({isActive}) => isActive ? 'seleccionado' : ''}>Servicios</NavLink>
            </li>
            <li>
              <NavLink to='/portafolio' className={({isActive}) => isActive ? 'seleccionado' : ''}>Portafolio</NavLink>
            </li>
            <li>
              <NavLink to='/contacto' className={({isActive}) => isActive ? 'seleccionado' : ''}>Contacto</NavLink>
            </li>
        </ul>
    </nav>
  )
}
